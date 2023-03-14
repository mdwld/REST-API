// 1 require mongoose 
const mongoose = require ("mongoose")
// 2 connect DB 
const connectDB = async () => {
    try {
        //  to clear the message (node:3688) [MONGOOSE]// DeprecationWarning {useNewUrlParser:true}and mongoose.set('strictQuery',false)
        mongoose.set('strictQuery',false);
        // step 1 

await mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology: true,});
        // step 2 
console.log("Database connected");

    } catch (error) {
console.log('Database is not connected' , error);
    }
};

module.exports = connectDB;