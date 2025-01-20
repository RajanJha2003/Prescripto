import express from 'express'
import cors from 'cors'

import 'dotenv/config'
import connectDB from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import { adminRouter } from './routes/adminRoute.js';

// app config

const app=express();
const port=process.env.PORT || 4000;


connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());


// routes 

app.use("/api/v1/admin",adminRouter);


// api endpoint

app.get('/',(req,res)=>{
    res.send('api working')

})


app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})