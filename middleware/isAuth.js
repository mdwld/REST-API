const jwt = require('jsonwebtoken')
const Users = require('../models/Users')


const isAuth = async (req, res, next) => {
try {
    // verify is the token is present or not (in the local storage or headers)
    const token = req.headers["authorization"]
    if(!token){
        return res.status(401).send({errors : [{msg: 'not authorized'}]})
    } // 401 for not authorization
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    const foundUser = await Users.findOne({_id: decoded.id})
    if(!foundUser) {
        return res.status(401).send({errors:[{msg:'not authorized'}]});
    }
    req.user = foundUser
    next();

} catch (error) {
    res.status(401).send({errors: [{msg:'not authorized'}]});
}
};

module.exports = isAuth;