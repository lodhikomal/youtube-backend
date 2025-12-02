import { upload } from "../middlewares/multer.middleware.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const registerUser=asyncHandler(async(req,res)=>{
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res
//  console.log(req.files,"hhhh");
    // console.log(req.body);
    const {password,fullName,username,email}=req.body
    if([password,fullName,username,email].some((field)=>
           field?.trim()===""
    )){
        throw new ApiError(400,"All field are required. ")
    }
     
    const existedUser= await User.findOne({
        $or:[{email},{username}]
    })
    if(existedUser){
        throw new ApiError(409,"User with email or username already exits. ")
    }
    const avtarLocalPath=req.files?.avatar[0]?.path
    // console.log("asdffsd",avtarLocalPath)
    //  const coverImageLocalPath=req.files?.coverImage?.[0]?.path
      let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }
     if(!avtarLocalPath){
        throw new ApiError(400,"Avatar file is required")
     }
     const avatar=await uploadOnCloudinary(avtarLocalPath)
      const coverImage=await uploadOnCloudinary(coverImageLocalPath)
      if(!avatar){
        throw new ApiError(400,"Avatar file is required")
      }
      //crete entry in db
     const user= await User.create({
        email,
        password,
        username:username.toLowerCase(),
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url||""

      })
 const createdUser = await User
    .findById(user._id)
    .select("-password -refreshToken")
    .lean();
      
        //  console.log("hhh", createdUser,"jjjj")
     if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering user.")
     }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )
    })

export {registerUser}