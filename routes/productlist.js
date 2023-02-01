// 1 require express
const express = require ('express');
const ProductList = require('../models/ProductList');

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
router.post('/add', async (req,res)=>{
    try {
        const {name , description, link} = req.body;
        const newProduct = new ProductList({name , description, link});
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
        await ProductList.findOneAndDelete({_id})
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
router.put('/:_id', async (req,res)=>{
    try {
        const {_id} = req.params
        const result = await ProductList.updateOne({_id},{$set:{...req.body}})
        res.status(200).send({msg:'Product updated'})
    } catch (error) {
        res.status(400).send({msg:'product cannot be updated with this id', error})
    }
})
// 'last' export
module.exports = router ;