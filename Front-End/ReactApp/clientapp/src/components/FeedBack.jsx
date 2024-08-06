// import { useState } from "react";
// import axios from 'axios';
// //import swal from 'sweet'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const FeedBack = () => {
//   const API_URL = "http://localhost:3001/addFeedBack";
//   const [feedback, setFeedBack] = useState({ name: "", email: "", remarks: "" });
//   const MySwal = withReactContent(Swal)
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);


//   const handleInputChange = (e) => {
//     setFeedBack({ ...feedback, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     try {
//       const response = await axios.post(API_URL, feedback);
//       console.log(response.data);
//       setFeedBack({ name: "", email: "", remarks: "" });
//       Swal.fire(response.data)
//     } catch (err) {
//       setError("Error submitting feedback. Please try again.");
//       console.error(err.message);
//     } finally {
//       setLoading(false);
//     }

//     console.log("User name is " + feedback.name);
//     console.log("User email is " + feedback.email);
//     console.log("User Remarks is " + feedback.remarks);
//   };

//   return (
//     <section className="vh-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8 col-sm-12" style={{ marginTop: "25px", marginLeft: "200px" }}>
//             <div className="card">
//               <div className="card-body">
//                 <form onSubmit={handleFormSubmit}>
//                   <div className="mb-3">
//                   <h1 style={{ textAlign: "center", marginTop: "5px" }}>Feedback Form</h1>
//                     <label htmlFor="name" className="form-label" style={{color:"blue"}}>Name</label>
//                     <input type="text" className="form-control" id="name" name="name" value={feedback.name} onChange={handleInputChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label" style={{color:"blue"}}>Email address</label>
//                     <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" value={feedback.email} onChange={handleInputChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="remarks" className="form-label" style={{color:"blue"}}>Remarks</label>
//                     <textarea className="form-control" id="remarks" name="remarks" rows="3" value={feedback.remarks} onChange={handleInputChange} required></textarea>
//                   </div>
//                   {error && <div className="alert alert-danger">{error}</div>}
//                   <div className="d-grid gap-2 col-md-6 col-sm-12 mx-auto">
//                     <button type="submit" className="btn btn-primary mb-3" disabled={loading}>
//                       {loading ? "Submitting..." : "Submit"}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeedBack;

import { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const FeedBack = () => {
  const API_URL = "http://localhost:3001/addFeedBack";
  const [feedback, setFeedBack] = useState({ name: "", email: "", remarks: "" });
  const MySwal = withReactContent(Swal)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFeedBack({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!validateForm()) {
        setLoading(false);
        return;
      }

      const response = await axios.post(API_URL, feedback);
      console.log(response.data);
      setFeedBack({ name: "", email: "", remarks: "" });
      Swal.fire(response.data);
      window.location.reload();
    }
    
    catch (err) {
      setError("Error submitting feedback. Please try again.");
      console.error(err.message);
    } finally {
      setLoading(false);
    }

    console.log("User name is " + feedback.name);
    console.log("User email is " + feedback.email);
    console.log("User Remarks is " + feedback.remarks);
  };

  const validateForm = () => {
    let isValid = true;

    // Name validation
    if (!feedback.name.match(/^[A-Za-z\s]+$/)) {
      setError("Name must contain only alphabetic characters.");
      isValid = false;
    }

    // Email validation
    if (!feedback.email.match(/\S+@\S+\.\S+/)) {
      setError("Invalid email address.");
      isValid = false;
    }

    // Remarks validation
    if (!feedback.remarks.match(/^[A-Za-z\s]+$/)) {
      setError("Remarks must contain only alphabetic characters.");
      isValid = false;
    }

    return isValid;
  };

  return (
    <section className="vh-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12" style={{ marginTop: "25px", marginLeft: "200px" }}>
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <h1 style={{ textAlign: "center", marginTop: "5px" }}>Feedback Form</h1>
                    <label htmlFor="name" className="form-label" style={{color:"blue"}}>Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={feedback.name} onChange={handleInputChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{color:"blue"}}>Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" value={feedback.email} onChange={handleInputChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="remarks" className="form-label" style={{color:"blue"}}>Remarks</label>
                    <textarea className="form-control" id="remarks" name="remarks" rows="3" value={feedback.remarks} onChange={handleInputChange} required></textarea>
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="d-grid gap-2 col-md-6 col-sm-12 mx-auto">
                    <button type="submit" className="btn btn-primary mb-3" disabled={loading}>
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;

