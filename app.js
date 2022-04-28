const express = require('express');
const router = require('./src/routes/api');

const app = new express();

const mongoose = require('mongoose');


// Security Middleware  Import 
const bodyParser= require('body-parser');
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss= require("xss-clean"); 
const hpp = require("hpp");
const cors = require("cors");

// Security Middleware Implement

app.use(cors());

app.use(helmet());

app.use(mongoSanitize());

app.use(xss());

app.use(hpp());

app.use(bodyParser.json());

// Request Rate Limiting 


const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);



// MongoDB DB Connection

const URI = `mongodb://127.0.0.1:27017/Schools`;
const OPTIONS ={user: "", pass: ""} 


mongoose.connect(URI,OPTIONS,(error=>{
   
    error && console.log(error);

    console.log("Connected to MongoDB");

}))





app.use("/api/v1",router);

// UNDEFINED Route

app.use('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'Route not found'
    });
})

module.exports = app;