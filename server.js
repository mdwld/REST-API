//1
const express = require("express");

//2
const app = express();
//3
// require dot env and config it must be before const PORT (any file using dotenv and wanted to be imported it must be imported after this line of code cos after that anything in the dotenv will be readed ) 
require('dotenv').config();
// 7 middleware bodyparser 
app.use(express.json());
//5 connect DB
const connectDB = require('./config/connectDB');
connectDB(); 

// (cloudinary) parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// 6 routes
app.use('/api/products', require('./routes/productlist'));
app.use('/api/users', require ('./routes/users'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/historique', require('./routes/historique'));
app.use('/api/subscription', require('./routes/subscription'));
//4 create PORT         
const PORT = process.env.PORT

//last
app.listen(PORT, error => {
    error?console.error(`Failed to connect ${error}`): 
    console.log(`serveur running on port ${PORT}`);
})

