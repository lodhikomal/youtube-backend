import mongoose from "mongoose";
import express from "express";
import { DB_Name } from "./constants";

const  app=express()
(async()=>{
    try {
   const conectionINstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
    app.on("error",(error)=>{
        console.log(error,"error");
        throw error
    })
    app.listen(`process.env.PORT`,()=>{
        console.log(`server is listening on port ${process.env.PORT}`,)
    })
    } catch (error) {
        console.log("Error:",error)
    }

})()