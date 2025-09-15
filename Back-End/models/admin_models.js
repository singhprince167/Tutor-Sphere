import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
    {
        admin_id:{type:String,required:true,unique:true,trim:true},
        admin_pass:{type:String,required:true,min:6,max:20}
    }
)

const adminModel = mongoose.model("admin",adminSchema)
export default adminModel