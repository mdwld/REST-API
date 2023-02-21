const Users = require("../models/Users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const {name, email, password, phone} = req.body;
const foundUser = await Users.findOne({email})
if (foundUser) {
    return res.status(400).send({errors:[{msg:'email should be unique please try again'}]});
}
const saltRounds = 10; // hashing degree (see documentation)
const hashedPassword = await bcrypt.hash(password, saltRounds)
        const newUser = new Users ({...req.body});
        newUser.password = hashedPassword;//this line must be before saving and after const newUser
        await newUser.save();
        //creation Token after save 
        const token = jwt.sign(
            {
                id: newUser._id
            },
            process.env.SECRET_KEY,
            {expiresIn:'1h'}
        )
        res.status(200).send({msg:"user added", users: newUser , token});
    } catch (error) {
        res.status(400).sen({msg: 'user cant be added', error})
    }
};

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const foundUser = await Users.findOne({email})
        if(!foundUser) {
            return res.status(400).send({errors : [{msg : 'Bad credential'}] })
        }
        const checkPassword = await bcrypt.compare(password, foundUser.password);
        if(!checkPassword) {
            return res.status(400).send({errors : [{msg : 'Bad credential'}] })
        }
        //cration token before sending the response 
        const token = jwt.sign(
            {id: foundUser._id},
            process.env.SECRET_KEY,
            {expiresIn:'1h'}
        )
        res.status(200).send({msg : 'login succesfully', users: foundUser, token})
    } catch (error) {
        res.status(400).send({errors : [{msg : 'cannot login'}]})
    }
};

//cloudinary 


//get all users 

exports.usersToGet = async(req,res) => {
    try {
        const listUsers = await Users.find();
        res.status(200).send({msg :'users list', listUsers})
    } catch (error) {
        res.status(400).send({msg :'cannot get all users' ,error})
    }
}
