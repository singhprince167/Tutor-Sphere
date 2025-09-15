import adminModel from "../models/admin_models.js";
import  FeedBackModel  from '../models/feedback_models.js'
import ContactModel from  '../models/contact_models.js'
import TutorModel from "../models/tutor_models.js";
import UserModel from "../models/user_models.js";
import UploadModel from "../models/upload_Resource_models.js";


export const admin = (request, response) => {
    response.send("This is response from server to home page");
}

//for admin login
export const login = async (request,response) =>{
    try{
        let account_info =  request.body
        console.log(account_info);
        const{username,password} = account_info

        const admin_data = await adminModel.findOne({admin_id:username})
        console.log(admin_data);

        if(admin_data != null)
        {
            if(admin_data.admin_pass == password)
            {
                // response.send("admin found")
                response.send({
                code:200,
                message:"adminhome",
                token:admin_data.admin_id
            });
            }
            else
            {
                response.send({code:404, message:"password error"})
            }
        }
        else
        {
            response.send("Invalid credentails")
        }

    }
    catch(error)
    {
        console.log(error);
    }
}

// Allfeedback Function

export const allFeedbacks=async(req,res)=>{
    try{
        const feedbackData=await FeedBackModel.find()
        if(feedbackData!=null)
        res.send(feedbackData)
    else
    res.send("No Feedback Found")
    }
    catch(err){
        console.log(err.message);
    }
}
// allContact Function

export const allcontacts=async(req,res)=>{
    try{
        const userData=await ContactModel.find()
        if(userData!=null)
        res.send(userData)
    else
    res.send("No Feedback Found")
    }
    catch(err){
        console.log(err.message);
    }
}

// all Tutors Function

export const alltutors=async(req,res)=>{
    try{
        const userData=await TutorModel.find()
        if(userData!=null)
        res.send(userData)
    else
    res.send("No Tutors Found")
    }
    catch(err){
        console.log(err.message);
    }
}

// all Users Function

export const allusers=async(req,res)=>{
    try{
        const userData=await UserModel.find()
        if(userData!=null)
        res.send(userData)
    else
    res.send("No Users Found")
    }
    catch(err){
        console.log(err.message);
    }
}

//add Upload Resource


export const addUploadResource=async(req,res)=>{

    const data=req.body
      console.log(req.body);
      const{name,email,selecttype,date,Description}=data
      const photo=req.file.filename
    try{

        const employeeDoc=new UploadModel({name:name,email:email,selecttype:selecttype,date:date,Description:Description,photo:photo})
        await employeeDoc.save()
        res.send("Employee record added successfully")
    }
    catch(err)
    {

        console.log(err.message);
    }

}

