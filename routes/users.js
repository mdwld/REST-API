const express = require('express');
const { register , login } = require('../controllers/users');
const { registerValidation, loginValidation, validation } = require('../middleware/validator');
const upload = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");
const Users = require("../models/Users");
const  isAuth  = require('../middleware/isAuth');


const router = express.Router();

router.post('/register', registerValidation(), validation, register);

router.post('/login', loginValidation(), validation, login);



//current 
router.get('/current', isAuth, (req, res) => {
    res.send(req.user); //req.user in the isAuth.js
})

//cloudinary POST
router.post('/uploadPhoto',  isAuth, upload.single("profile_img"), async (req, res) => {
    //const identification = req.user;
   
    try {
       //const {_id} = req.params
      //const userToGet = await Users.findOne({_id});

      // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    
    // Create new user
    //name: req.user.name ETC... is essential to send data with name,email and phone in the DB !!!!? WHY!?
        let users = new Users({
          //_id: req.user.id,
          name: req.user.name,
          email: req.user.email,
          phone: req.user.phone,
        profile_img: result.secure_url,
        cloudinary_id: result.public_id
    });
    // save user details in mongodb
    await users.save();
    res.status(200)
      .send({
        users
      });
  } catch (err) {
    console.log(err);
  }
  
});

//cloudinary get 
router.get('/:_id', async (req, res) => {
  try {
    const {_id} = req.params
    let userToGet = await Users.findOne({_id });
    if (!userToGet)
      res.status(404)
      .send({
        message: "User not found!"
      });
    res.status(200)
      .send(JSON(userToGet));
  } catch (err) {
    console.log(err);
  }
});
module.exports = router ; 