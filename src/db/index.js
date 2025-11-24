import mongoose from "mongoose";
import { DB_Name } from "../constants";

export const dbConnect=async()=>{
    try {
        const conectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        
    } catch (error) {
         console.log("Error:",error)
         process.exit(1)
    }

}