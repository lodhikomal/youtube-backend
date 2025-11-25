import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

export const dbConnect=async()=>{
    try {
        const conectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`MongoDB connected: ${conectionInstance.connection.host}`);
        
    } catch (error) {
         console.log("Error:",error)
         process.exit(1)
    }

}