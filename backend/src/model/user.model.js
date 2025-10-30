import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {   
        
        email:{
            type:String,
            required:true,
            unique:true,
        },
        fullName:{
            type:String,
            required:true,
            trim:true,

        },
        password:{
            type:String,
            required:true,
            minlength:6,
        },
        profilePic:{
            type:String,
            default:"",
        },
    },
    {timestamps:true}  // it add fields like ===> createdAt, updateAt
);

const User = mongoose.model('User',userSchema); // always use camel case for creating model name 

export default User;