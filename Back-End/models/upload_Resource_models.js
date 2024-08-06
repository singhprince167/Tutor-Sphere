import mongoose from "mongoose";

const uploadSchema= new mongoose.Schema(
    {
        
            
            name: {
                type:String,
                required:true},
            email: {
                type:String,
                required:true},
            selecttype: {
                    type:String,
                    required:true},
            date: {
                    type:Date,
                    required:true},
            Description: {
                        type:String,
                        required:true},

            
            photo: {
                type:String,
                required:true},
            

            

    }
)

const UploadModel=mongoose.model("UploadResource",uploadSchema);
export default UploadModel;