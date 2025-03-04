import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

import userRoute from "./routes/userRoute.js"

mongoose
.connect(process.env.MONGO)
.then(()=> {
    console.log("Connected to database")
})
.catch((err)=>{
    console.log(err)
})
const app=express();

app.listen(3000,()=>{
    console.log("server listening on port 3000!")

})

app.use('/api/user',userRoute)

