const mongoose = require('mongoose');
const {Schema , model} = mongoose;
const usersSchema = new Schema ({
    name: {
                type: String,
                
            },
    email: {
                type: String,
                
            },
     password: {
        type: String, 
        
     },
     phone: Number,
//cloudinary 
     profile_img: String,

        cloudinary_id: String
});
module.exports = Users = model('users',usersSchema);

