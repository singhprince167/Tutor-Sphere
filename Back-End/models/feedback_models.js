import mongoose from "mongoose";

const feedbackSchema= new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true}, 
        remarks:{type:String, required:true},
    }
)

const FeedBackModel=mongoose.model("Feedback",feedbackSchema);
export default FeedBackModel;