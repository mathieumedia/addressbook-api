const express = require('express');
const colors = require('colors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv').config();

const connectDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold);
    } catch(err){
        console.log(`Error: ${err.message}`.bgRed.underline.bold);
        process.exit(1)
    }
}

connectDB();

const app = express();
app.use(express.json({extended: false}));

app.listen(PORT, () => console.info(`Server started on port ${PORT}`.cyan.underline.bold));