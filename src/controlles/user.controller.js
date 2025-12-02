import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser=asyncHandler(async(req,res)=>{
    // const {password,fullName,username,email}=res.body
    console.log("email:",req.body) 
})
export {registerUser}