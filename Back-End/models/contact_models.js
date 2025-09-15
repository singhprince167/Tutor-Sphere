import mongoose from "mongoose";

const contactSchema= new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        Query:{type:String,required:true},
        number:{type:String, required:true}

    }
)

const ContactModel=mongoose.model("Contactus",contactSchema);
export default ContactModel;