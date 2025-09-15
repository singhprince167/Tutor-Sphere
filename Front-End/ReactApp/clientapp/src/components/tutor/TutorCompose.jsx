import Footer from "../Footer";
import TutorHeader from "./TutorHeader";

import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const TutorCompose=()=>{
const URL="http://localhost:3001/tutor/compose_message"
const navigate=useNavigate()


const token_data=localStorage.getItem("Token_key")
console.log(`token data is${token_data}`);
if(!token_data)
{
  navigate("/tutorlogin")
}
const [message,setMessage]=useState({sender_id:token_data, receiver_id:"",subject:"",text:""})


  const handleChange=(e)=>{
    
    setMessage({...message,[e.target.name]: e.target.value});
    
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log("form data",message);
  

    try{
      const response=await axios.post(URL,message)
      console.log(response.data);
      setMessage({sender_id:"",receiver_id:"",subject:"",text:""})
    }
    catch(err){
      console.log(err.message);
    }


  


  }
    return(
      <>
      <TutorHeader/>
   <form onSubmit={handleSubmit} method="post">
    <div className="mt-4" style={{backgroundColor:"skyblue",border:'1px solid #333', marginLeft:"400px",marginRight:"400px"}}>

            <div className="mb-3">
              <h1 className="text-center">Tutor Compose Form</h1>
                <label htmlfor="receiver_id" className="form-label">ReceiverID</label>
                <input type="text" className="form-control" value={message.receiver_id} name="receiver_id" onChange={handleChange}/>
            </div>

              <div className="mb-3">
                <label htmlfor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" value={message.subject} name="subject" onChange={handleChange}/>
              </div>

              <div className="mb-3">
                <label htmlfor="text" className="form-label">Text</label>
                <textarea className="form-control" rows="4" value={message.text} name="text" onChange={handleChange} placeholder="write text"required/>
              </div>


              

              <div className="text-center mb-4">
              <button type="submit" className="btn btn-outline-dark">Submit</button>

              </div>
        </div>
        </form>
        <Footer/>
       </>
    )
}
export default TutorCompose;