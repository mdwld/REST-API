const express = require('express');
const { loginAdmin } = require('../controllers/admin');
const isAuthAdmin = require('../middleware/isAuthAdmin');
const { validation, loginValidation } = require('../middleware/validator');
const {usersToGet} = require ('../controllers/users');



const router = express.Router()
//

router.post('/loginAdmin',validation, loginValidation(), loginAdmin);
router.get('/currentAdmin' , isAuthAdmin , (req , res) => {
    res.send(req.admin)
});

router.get('/users', usersToGet);



module.exports = router