//1 require mongoose
const mongoose = require('mongoose')

//2 create schema

const schema = mongoose.Schema
const productListSchema = new schema ({
    name:{
        type: String,
        require:true,

    },

    description: String,

    link :{
         type:String,
    }
    
    
});
module.exports = ProductList = mongoose.model('product', productListSchema)