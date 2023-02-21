// 1 require express
const express = require ('express');
const ProductList = require('../models/ProductList');
const upload = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");
// 2 express router
const router = express.Router()

// 3 routes
/**
 * @desc:testing route
 * @path : http://localhost:1851/api/products/test
 * @method:GET
 * @data : no data
 */
router.get('/test', (req,res)=>{
    res.send('hello monami');
})
/**
 * @desc: add products
 * @path : http://localhost:1851/api/products/add
 * @method: POST
 * @data : req.body
 * */
router.post('/add', upload.single("profile_img"), async (req,res)=>{
    try {
        const {name , description, link, profile_img} = req.body;
        const result = await cloudinary.uploader.upload(req.file.path);
        const newProduct = new ProductList({
            name: req.body.name, 
            description: req.body.description, 
            link: req.body.link, 
            profile_img: result.secure_url, 
            cloudinary_id: result.public_id});
       await newProduct.save();
       res.status(200).send({msg:'Product added', newProduct});
    } catch (error) {
        res.status(400).send({msg:'cannont add Product', error})
    }
    }

    )
    /**
 * @desc: all products to get
 * @path : http://localhost:1851/api/products/all
 * @method: GET
 * @data : no data
 * */
router.get('/all', async (req,res) => {
    try {
        const listProduct = await ProductList.find();
        res.status(200).send({msg : 'this is the list of all contacts',listProduct})
    } catch (error) {
        res.status(400).send({msg:'cannot get contact ', error})
    }
})
 /**
 * @desc: one products to get
 * @path : http://localhost:1851/api/products/:id
 * @method: GET
 * @data : req.params._id
 * */
router.get('/:id' , async (req,res) => {
    try {
        const productToGet = await ProductList.findOne({_id : req.params.id})
        res.status(200).send({msg:'product geted', productToGet})
    } catch (error) {
        res.status(400).send({msg:'cannot find product',error})
    }
})

/**
 * @desc: delete products 
 * @path : http://localhost:1851/api/products/:_id
 * @method: DELETE
 * @data : req.params._id
 * */
router.delete('/:_id' , async (req , res) => {
    try {
        const {_id } = req.params
       let productToDelete =  await ProductList.findOneAndDelete({_id})
        await cloudinary.uploader.destroy(productToDelete.cloudinary_id);
        res.status(200).send({msg:'contact deleted'})
    } catch (error) {
        res.status(400).send({msg:'cannot delete contact with this id', error})
    }
})
/**
 * @desc: edit products 
 * @path : http://localhost:1851/api/products/:_id
 * @method: PUT
 * @data : req.params._id $ req.body
 * */
router.put('/:id', upload.single("profile_img"), async (req,res)=>{
    ///:_id cant be (see project nael in controlers of admin) !!!!
    try {
       //const {_id} = req.params
        // --> did not destroy the pic in the cloudinary ...  destroy the pic on the cloudinary only the first time we edit our product!!!!!
       const {name , description, link, profile_img} = req.body;
        let productToEdit =  await ProductList.findOne({_id:req.params.id});
        await cloudinary.uploader.destroy(productToEdit.cloudinary_id);
        const resul = await cloudinary.uploader.upload(req.file.path);
        const data = {
            name: req.body.name || productToEdit.name ,
            description: req.body.description || productToEdit.description,
            link: req.body.link || productToEdit.link,
            profile_img: resul.secure_url || productToEdit.profile_img,
            cloudinary_id: resul.public_id || productToEdit.cloudinary_id,
          };
          //await data.save();
        //
        productToEdit = await ProductList.updateOne({_id: req.params.id},{$set:{name:data.name, description:data.description, link:data.link,profile_img:data.profile_img}});//{_id},{$set:{...req.body}}
        //await productToEdit.save();
        res.status(200).send({msg:'Product updated'})
                            
    } catch (error) {
        res.status(400).send({msg:'product cannot be updated with this id', error})
    }
})
// 'last' export
module.exports = router ;