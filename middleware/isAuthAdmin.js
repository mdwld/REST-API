const Admin = require("../models/Admin");
const jwt = require('jsonwebtoken');



const isAuthAdmin = async (req , res , next ) => {
    try {
    const token = req.headers["authorization"]
    if(!token) {
        return res.status(401).send({errors : [{msg : 'not authorized 1'}]})
    }
const decoded = jwt.verify(token, process.env.SECRET_KEY) //id
const foundAdmin = await Admin.findOne({_id:decoded.id})

if(!foundAdmin) {
    return res.status(401).send({ errors : [{msg :'not authorized 2'}]})
}
req.admin = foundAdmin ;
next();
} catch (error) {
    return res.status(401).send({errors : [{msg : 'not authorized 3'}]})
}

}

module.exports = isAuthAdmin 