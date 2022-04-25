const express = require('express');
const router = require('./src/routes/api');

const app = new express();


// Security Middleware  Import 

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

// Request Rate Limiting 


const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);




app.use("/api/v1",router);

// UNDEFINED Route

app.use('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'Route not found'
    });
})

module.exports = app;