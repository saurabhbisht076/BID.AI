const mongoose = require('mongoose');
const connectdb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`MONGODB Connected:${conn.connection.host}`);
    }
    catch(error){
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
};
module.exports = connectdb;