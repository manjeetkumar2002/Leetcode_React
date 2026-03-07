const mongoose = require("mongoose")

const {Schema} = mongoose


const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20
    },
    lastName:{
        type:String,
        minLength:3,
        maxLength:20
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        immutable:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:6,
        max:80
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    problemSolved:{
        // array of strings
        type:[
            // store the problem id of the problems solved by the user
            {
                type:Schema.Types.ObjectId,
                ref:'problem'
            }
        ],
        unique:true
    } 
},{timestamps:true})
// user is name of the model
const User = new mongoose.model("user",userSchema)


module.exports = User