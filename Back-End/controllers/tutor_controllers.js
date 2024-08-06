import { request, response } from "express";
import TutorModel from "../models/tutor_models.js";
import MessageModel from "../models/Message_Models.js";
import MeetingRequest from "../models/MeetingRequest_models.js";
export const addTutor = async (request, response) => {
    const TutorObject = request.body
    console.log(TutorObject); //print data on terminal
    const { id, password, name, email, phone, experience, skill, qualification, gender, city, Standard,board } = TutorObject;
    try {
        const tutorDoc = new TutorModel({
            id: id,
            password: password,
            name: name,
            email: email,
            phone: phone,
            experience: experience,
            qualification: qualification,
            gender: gender,
            skill: skill,
            gender: gender,
            city: city,
            board:board,
            Standard: Standard,


        })
        await tutorDoc.save()
        response.send("User Logged In Successfully");
    }
    catch (error) {
        console.log(error.message);
    }

}

//For tutor Login
export const login = async (req, res) => {
    try {


        let account_Info = req.body
        console.log(account_Info);
        //account_Info.id
        //accoint_Info.pass
        const { email, password } = account_Info

        const tutor_data = await TutorModel.findOne({ email: email })
        console.log(tutor_data);
        if (tutor_data != null) {
            if (tutor_data.password == password) {

                res.send({ code: 200, message: "tutorhome", token: tutor_data.email })
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

// tutor profile


export const profile = async (request, response) => {
    try {
        const uid = request.query.email//fectching data from react
        console.log(uid);

        const user_data = await TutorModel.findOne({ email: uid })
        console.log(user_data);
        response.send(user_data)
    }
    catch (error) {
        console.log(error);
    }

}
//Tutor edit page...
export const TutorEdit= async (request,response)=>{
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
        const status =await TutorModel.updateOne(filter_condition,updateDoc)
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
export const tutor_inbox=async(request,response)=>{
    try{
        
      const user_data=request.body
      const receiver_id=request.query.receiver_id
      console.log("in inbox"+user_data);
      console.log("receiverid"+receiver_id);
      const inbox_data=await MessageModel.find({receiver_id:receiver_id})
      console.log("in tutor inbox"+inbox_data);
      if (inbox_data!=null)
      response.send(inbox_data)
    }
    catch(err){
      console.log(err.message);
    }
   }
 
//Pending Query request
export const pendingquery=async(request,response)=>{
    try{
        
      const PendingQuery_data=request.body
      const Tutor_id=request.query.Tutor_id
       console.log("in pending"+PendingQuery_data);
       console.log("Tutor id"+Tutor_id);
    
     // const pending_data=await MeetingRequest.find({Tutor_id:Tutor_id})
    const pending_data=await MeetingRequest.find({$and:[{Tutor_id:Tutor_id},{Answer:null}]})
      console.log("in tutor pending Query"+pending_data);
      if (pending_data!=null)
      response.send(pending_data)

    }
    catch(err){
      console.log(err.message);
    }
   }  
  
   // answered by tutor
   export const update=async(req,res)=>{
    const {id,Answer}=req.body
        console.log(id);
        console.log(Answer);

    try {
        const updateDoc={
            $set:{
                Answer:Answer,
             
            
            }
                    }
                    const filter={_id:id}
                    const status = await MeetingRequest.updateOne(filter,updateDoc)
                    console.log(status);
                    res.send(status)
            
    } catch (error) {
        
    }

}

// show all answered to Tutor
export const AllAnswered=async(req,res)=>{
    const Tutor=req.query.Tutor_id
     console.log(Tutor)
    try{

   const userData=await MeetingRequest.find({Tutor_id:Tutor})
        console.log(userData)
        if(userData!=null)
        res.send(userData)
    else
    res.send("no Tutor found")
    }
    catch(err){
        console.log(err.message);
    }
}