const express = require("express");
const main = require("./config/db");
require("dotenv").config();
const cookieParser = require("cookie-parser");
// importing router
const authRouter = require("./routes/userAuth");
const redisClient = require("./config/redis");

const app = express();
// parsing req.body and cookie data into js object
app.use(express.json())
app.use(cookieParser())

// userAuth apis
app.use("/user",authRouter) 


// we will connect to both mongodb and redis and then we listen to server

const InitializeConnection = async ()=>{
    try{
      // connect both db
      await Promise.all([redisClient.connect(),main()])
      console.log("DB Connected")
      // listen to port 
      app.listen(process.env.PORT, () => {
      console.log("server listening at port number ", process.env.PORT);
    })
    }
    catch(err){
      console.log("Error : "+err)
    }
}

InitializeConnection()












// main()
// .then(async() => {
//   app.listen(process.env.PORT, () => {
//     console.log("server listening at port number ", process.env.PORT);
//   })
// })
// .catch((err)=>{
//     console.log("ERROR occured :",err)
// })