const mongoose = require('mongoose');
const {Schema , model} = mongoose;
const usersSchema = new Schema ({
    name: {
                type: String,
                required: true 
            },
    email: {
                type: String,
                required: true
            },
     password: {
        type: String, 
        required: true
     },
     phone: Number       
});
module.exports = Users = model('users',usersSchema);

