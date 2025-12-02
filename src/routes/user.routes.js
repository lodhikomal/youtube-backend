import { Router } from "express";

import { upload } from "../middlewares/multer.middleware.js";
import { registerUser } from "../controlles/user.controller.js";


const router = Router()

router.route("/register").post(   
    registerUser
    )



export default router