import mongoose from "mongoose";

const MeetingRequestSchema=new mongoose.Schema(
    {
        Tutor_id:{
            type:String,
            required:true,
            
            
        },
        User_id:{
            type:String,
            
            require: true, 
        },
        Questions:{
            type:String,
            required:null,   
        },
        Answer:{
            type:String,
            default:null,
        }
    }
)
const MeetingRequest=mongoose.model("MeetingRequest",MeetingRequestSchema);
export default MeetingRequest;