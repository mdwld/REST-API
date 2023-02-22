const Admin = require('../models/Admin');
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.loginAdmin = async (req, res) => {
    try {
        const {email, password} = req.body ;
        //check existant mail 
        const foundAdmin = await Admin.findOne({email});
        if(!foundAdmin) {
            return res.status(400).send({errors : [{msg :'bad credential 1!'}]})
        }
        //check password
        //const checkPassword = await bcrypt.compare(password , foundAdmin.password)
        if(password !== foundAdmin.password) {
            return res.status(400).send({errors : [{msg : 'bad credential 2!'}]})
        }
        //cration token before sending the response
        const token = jwt.sign(
            { id : foundAdmin._id },
            process.env.SECRET_KEY,
            {expiresIn:"24h"}
            )
            res.status(200).send({msg :'login success...', admin : foundAdmin , token})
    } catch (error) {
        res.status(400).send({errors : [{msg : 'cannot find admin'}]})
    }
};


