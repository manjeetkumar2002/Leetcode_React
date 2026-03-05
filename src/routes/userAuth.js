const express = require("express")
// import controllers 
const {register,login,logout,getProfile,adminRegister} = require("../controllers/userAuthent")
const userMiddleware = require("../middleware/userMiddleware")
const adminMiddleware = require("../middleware/adminMiddleware")

const authRouter = express.Router()

// register ,login,logout,getProfile 

authRouter.post("/register",register)
authRouter.post("/login",login)
// validate the token send by user using userMiddleware before calling logout controller
// we will check the token is valid or not , if token is not valid its means it is already logout
// // we can create a usermiddleware for validating the token because we will use it somewhere else also
authRouter.post("/logout",userMiddleware,logout)
authRouter.get("/getProfile",getProfile)


//  admin register route
//  only a admin can register a admin , so we create the adminMiddleware
authRouter.post("/admin/register",adminMiddleware,adminRegister)

module.exports = authRouter