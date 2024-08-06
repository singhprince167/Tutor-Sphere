import { request, response } from "express";
import FeedBackModel from "../models/feedback_models.js";
import ContactModel from "../models/contact_models.js";
import TutorModel from "../models/tutor_models.js";





// export const admin = (request, response) => {
//     response.send("this is admin page....")
// }

export const addFeedBack = async (request, response) => {

    const feedbackObject = request.body
    const { name, email, remarks } = feedbackObject;

    try {
        const feedBackDoc = new FeedBackModel({
            name: name,
            email: email,
            remarks: remarks,

        })
        await feedBackDoc.save()
        response.send("thank you for your feedback")

    }
    catch (err) {
        console.log(err.message);

    }

}



export const addContact = async (request, response) => {
    const contactObject = request.body
    console.log(contactObject);
    const { name, email, query, phone } = contactObject;
    try {
        const contactBackDoc= new ContactModel({
            name:name,
            email:email,
            Query:query,
            number:phone
        })
        await contactBackDoc.save();
        response.send('Your query has been submitted successfully')
    }
    catch (error) {
        console.log(error.message);
    }

}


export const addLoginpage = async (request, response) => {
    const loginpageObject = request.body
    // console.log(loginpageObject);
    const {email,password} = loginpageObject;
    try {
        const loginPageDoc = new loginPageModel({
            email: email,
            password: password
        })
        await loginPageDoc.save()
        response.send("User Logged In Successfully");
    }
    catch (error) {
        console.log(error.message);
    }
}

//Search Tutor
export const SearchTutor =async(req ,res)=>{
    let SearchTutorData = {};
    try{
        const {city}=req.query;
        console.log("in server"+city);
         if(city){
            const regex=new RegExp(city,"i")   ;  
            SearchTutorData=await TutorModel.find({city:{$regex : regex}})
    }
    else{
        SearchTutorData=await TutorModel.find().limit(10)
    }
    res.send({message:"Success",search_data:SearchTutorData}) 
}
catch(err){
    console.log(err);
}
}



