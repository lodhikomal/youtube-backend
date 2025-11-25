
import express from "express";

import { dbConnect } from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path:"./env"
});

const  app=express()




dbConnect()
// (async()=>{
//     try {
//    const conectionINstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//     app.on("error",(error)=>{
//         console.log(error,"error");
//         throw error
//     })
//     app.listen(`process.env.PORT`,()=>{
//         console.log(`server is listening on port ${process.env.PORT}`,)
//     })
//     } catch (error) {
//         console.log("Error:",error)
//     }

// })()