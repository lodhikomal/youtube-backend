import app from "./app.js";
import { dbConnect } from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
});



const port=process.env.PORT||5000;

dbConnect()
.then(()=>{
    app.on("error",(error)=>{
      console.log(error,"error"); 
          throw error;
 })
   app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
})
.catch((error)=>{
    console.log(`mongo db connection is failed:${error}`)
})



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