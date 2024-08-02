// const express = require('express')
// const colors = require('colors')
import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import jwt from 'jsonwebtoken'

//configure env
dotenv.config();

//databse config
connectDB();

//rest Object
const app = express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes);

//rest api
app.get("/",(req,res)=>{
    res.send(
        // message:"Welcome To SkillBarter: A Platform for Skill Exchange",
        "<h1>Welcome To SkillBarter: A Platform for Skill Exchange</h1"
    )
})

//PORT 
const PORT = process.env.PORT || 8080;


//run listen 
app.listen(PORT,()=>{
    console.log(`Server Running on  ${PORT}`.bgCyan.white);
});