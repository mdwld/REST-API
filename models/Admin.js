const mongoose = require('mongoose');
const {Schema , model} = mongoose;

const adminSchema = new Schema ({
    firstname :{
        type: String,
        required : true
    },

    name : {
        type : String, 
        required: true
    },

    email : {
        type : String, 
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true 
    }
});

module.exports = Admin = model ('admin', adminSchema)