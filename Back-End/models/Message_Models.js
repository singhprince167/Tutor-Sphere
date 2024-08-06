import mongoose from "mongoose"
const messageSchema=new mongoose.Schema(
    {
        receiver_id:{type:String,required:true},
        sender_id:{type:String,required:true},
        subject:{type:String,required:true},
        text:{type:String,required:true},
        date_created:{type:Date,required:true,default:Date.now()},
    }
)

const MessageModel=mongoose.model("message",messageSchema);
export default MessageModel