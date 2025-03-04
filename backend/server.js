const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const app = express();
connectDB();
app.use(express.json());
const productsroutes  = require('./routes/productsroute');
app.use('/api/products',productsroutes);
const PORT = process.env.PORT||5000;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});
