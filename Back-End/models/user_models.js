import mongoose from "mongoose";

const UserSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            
            trim:true
        },
        email:{
            type:String,
            unique:true,
            require: true, 
        },
        password:{
            type:String,
            required:true,   
        },
        phone:{
            type:Number,
            required:true
        }
    }
)
const UserModel=mongoose.model("User",UserSchema);
export default UserModel;