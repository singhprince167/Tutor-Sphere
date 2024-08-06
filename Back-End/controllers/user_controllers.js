
import UserModel from "../models/user_models.js";

import MessageModel from "../models/Message_Models.js";
import UploadModel from "../models/upload_Resource_models.js";
import TutorModel  from "../models/tutor_models.js";
import MeetingRequest from "../models/MeetingRequest_models.js";
export const home = (req, res) => {
    res.send("<h1>this is response from server to home page</h1>")
}

export const addUser = async (request, response) => {

    try {

        const acc_info = request.body;
        console.log(acc_info)
        const { name, email, password, phone } = acc_info;

        const userDoc = new UserModel({ name: name, email: email, password: password, phone: phone });

        await userDoc.save();
        response.send("User registrastion success..")
    }
    catch (err) {
        console.log(err.message)
    }
}

//For user Login
export const login = async (req, res) => {
    try {


        let account_Info = req.body
        console.log(account_Info);
        //account_Info.id
        //accoint_Info.pass
        const { email, password } = account_Info

        const user_data = await UserModel.findOne({ email: email })
        console.log(user_data);
        if (user_data != null) {
            if (user_data.password == password) {

                res.send({ code: 200, message: "userhome", token: user_data.email })
            }
            else {

                res.send({ code: 404, message: "password error" })
            }
        }
        else {
            res.send("Invalid credentials")
        }
    }
    catch (error) { error.msg }




}

//profile


export const profile = async (request, response) => {
    try {
        const uid = request.query.email//fectching data from react
        console.log(uid);

        const user_data = await UserModel.findOne({ email: uid })
        console.log(user_data);
        response.send(user_data)
    }
    catch (error) {
    console.log(error);
    }

}

// UserEdit Profile

export const userEdit= async (request,response)=>{
    try{
        const user_data = request.body
        const {name,email, phone}= user_data
        const updateDoc = {
            $set:{
                name:name,
                phone:phone
            }
        }
        const filter_condition ={email:email}
        const status =await UserModel.updateOne(filter_condition,updateDoc)
        console.log(status);
        response.send(status)

    }
    catch(err){
        console.log(err.message);
    }
}

//composemessage
export const compose_message=async(request,response)=>{
    const messageObject=request.body
    const {sender_id,receiver_id,subject,text}=messageObject
    try{
        const messageDoc=new MessageModel(
            {
                receiver_id:receiver_id,
                sender_id:sender_id,
                subject:subject,
                text:text,
            }
        )
        await messageDoc.save()
        response.send("thannkyou")
    }

    catch(err){
        console.log(err.message);
    }
}    

//tutorinbox
export const User_inbox=async(request,response)=>{
    try{
        
      const user_data=request.body
      const receiver_id=request.query.receiver_id
      console.log("in inbox"+user_data);
      console.log("receiverid"+receiver_id);
      const inbox_data=await MessageModel.find({receiver_id:receiver_id})
      console.log("in user inbox"+inbox_data);
      if (inbox_data!=null)
      response.send(inbox_data)
    }
    catch(err){
      console.log(err.message);
    }
   }

   // All Resourse Function

export const allresourse=async(req,res)=>{
    try{
        const ResourseData=await UploadModel.find()
        if(ResourseData!=null)
        res.send(ResourseData)
    else
    res.send("No Resourse Found")
    }
    catch(err){
        console.log(err.message);
    }
}

// all Tutors Function

export const alltutorsOnUserHeader=async(req,res)=>{
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

//Meeting Request Function
export const meetingrequest = async (request, response) => {

    try {

        const acc_info = request.body;
        console.log(acc_info)
        const { Tutor_id,Questions,User_id } = acc_info;

        const userDoc = new MeetingRequest({Tutor_id:Tutor_id,User_id:User_id, Questions:Questions });

        await userDoc.save();
        response.send("Meeting Request success..")
    }
    catch (err) {
        console.log(err.message)
    }
}