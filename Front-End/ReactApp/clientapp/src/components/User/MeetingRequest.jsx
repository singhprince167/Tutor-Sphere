// import { useState } from "react"
// import React from "react"
// import axios from "axios"

// import Footer from '../Footer.jsx'
// import { useParams } from "react-router-dom"


// function MeetingRequest() {
//     const {value} =useParams()
//     const token_data = localStorage.getItem("Token_key")
//     const URL="http://localhost:3001/User/meetingrequest"
//     const [MeetingRequest, setMeetingRequest]=useState({Tutor_id:value,Questions:"",User_id:token_data});
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//          try{
//             const response=await axios.post(URL,MeetingRequest)
//             console.log(response.data);
//             if(response)
//             {
//             alert("Question send successfully")
//            //setMeetingRequest({Questions:""});
//             }
//             console.log(MeetingRequest);
//          }
//          catch(err){
//             console.log(err.message);
//          }
//     }  
//     const  handleChange=(e)=>{
//         setMeetingRequest({...MeetingRequest,[e.target.name]:e.target.value})
//     }

//     return (
//         <>
        
//             <div className="d-flex justify-content-center align-item-center bg-secondary vh-100 ">
//                 <div className="bg-white p-3 rounded w-45 mt-5 " style={{ height: "80%" }} >
//                     <h1 style={{
//                         textAlign: 'center', backgroundColor: '#f0f0f0',
//                         padding: '5px',
//                         border: '1px solid #ccc',
//                         borderRadius: '1px',
//                         margin: '5px',
//                         marginBottom: '20px'
//                     }}>Meeting Request</h1>
//                     <form className="container sm-4" onSubmit={handleSubmit} >
                        
//                         <div className="form-group">
//                         <label for="exampleInputtext" style={{ color: "blue" }}>Questions</label>
//                             <input type="text"  className="form-control" id="exampleInputtext" aria-describedby="emailHelp" placeholder="Enter Your Questions" style={{ marginBottom: '20px' }} name="Questions" onChange={handleChange} />
//                             {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
//                         </div>
                        
//                         <div className="col-auto" >
//                             <button type="submit" className="btn btn-primary" >Submit</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <Footer/>
//         </>
//     )
// }
// export default MeetingRequest

import { useState } from "react";
import React from "react";
import axios from "axios";
import UserHeader from './UserHeader'
import Footer from '../Footer'
import { useParams } from "react-router-dom";

function MeetingRequest() {
  const { value } = useParams();
  const token_data = localStorage.getItem("Token_key");
  const URL = "http://localhost:3001/User/meetingrequest";
  const [MeetingRequest, setMeetingRequest] = useState({
    Tutor_id: value,
    Questions: "",
    User_id: token_data,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URL, MeetingRequest);
      console.log(response.data);
      if (response) {
        alert("Question sent successfully");
        // Reload the page
        window.location.reload();
      }
      console.log(MeetingRequest);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    setMeetingRequest({ ...MeetingRequest, [e.target.name]: e.target.value });
  };

  return (
    <>
    <UserHeader></UserHeader>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-5">
            <div className="card mt-1">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">Meeting Request</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label" style={{ color: "blue" }}>
                      Questions
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputText"
                      placeholder="Enter Your Questions"
                      name="Questions"
                      value={MeetingRequest.Questions}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default MeetingRequest;
