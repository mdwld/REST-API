const express = require('express');
const { register , login } = require('../controllers/users');
const { registerValidation, loginValidation, validation } = require('../middleware/validator');
const  isAuth  = require('../middleware/isAuth');

const router = express.Router();

router.post('/register', registerValidation(), validation, register);

router.post('/login', loginValidation(), validation, login);

//current 
router.get('/current', isAuth, (req, res) => {
    res.send(req.user); //req.user in the isAuth.js
})

module.exports = router ; 