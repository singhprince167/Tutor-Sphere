// import axios from "axios";
// import { useState } from "react";

// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const Contactus =() =>{
//     const MySwal = withReactContent(Swal)
//     const URL="http://localhost:3001/addContact"
//     const [contact,setContact]=useState({name:"",email:"",phone:"",query:""})
//     const handleChange=(e)=>{
//         setContact((currVal)=>{
//           return {...currVal,[e.target.name]:e.target.value}
//         })
//       }
    
    
//         const handelForm=async (e)=>{
//           e.preventDefault()
//           setContact({name:"",email:"",phone:"",query:""})
     
//           try{
//             const res= await axios.post(URL,contact)
//             console.log(res.data);

//             Swal.fire({
//                 title: "Contacts Us",
//                 text: res.data,
//                 icon: "question"
//               });
          
              
//           }catch(err){
//               console.log("error"+err.message)
//           }
      
//         }
//     return(
//         <>
//         <section className="vh-100" style={{ backgroundColor: "#7E8F74",backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            
//             <div className="container" >
//             <div className="row" >
                
                
//                 <div className="col-md-8 col-sm-12" style={{ marginTop: "25px", marginLeft:"200px" }} >
//                     <div className="card" >
//                         <div className="card-body" >
//                             <div className="mb-3">
//                             <h1 style={{textAlign:"center", marginTop: "5px"}}>Contact Us</h1><br/>
//                                 <label for="exampleFormControlInput1" className="form-label" style={{color:"blue"}}>Name</label>
//                                 <input type="text" className="form-control" value={contact.name} onChange={handleChange} name="name" />
//                             </div>
//                             <div className="mb-3">
//                                 <label for="exampleFormControlInput1" className="form-label" style={{color:"blue"}}>Email address</label>
//                                 <input type="email" className="form-control"  placeholder="name@example.com" value={contact.email} name="email" onChange={handleChange}/>
//                             </div>
//                             <div className="mb-3">
//                                 <label for="exampleFormControlTextarea1" className="form-label" style={{color:"blue"}}>Query</label>
//                                 <textarea className="form-control"  rows="3" value={contact.query} name="query" onChange={handleChange}></textarea>
//                             </div>
//                             <div className="form-outline mb-3">
//                             <label className="form-label" for="typeNumber" style={{color:"blue"}}>Number input</label>
//                                 <input type="number" id="typeNumber" className="form-control"value={contact.phone} name="phone" onChange={handleChange} />
                                
//                             </div>
//                             <div className="d-grid gap-2 col-md-6 col-sm-12 mx-auto" style={{ textAlign: 'center' }}>
//                                 <button type="submit" className="btn btn-primary mb-3" onClick={handelForm} >Submit</button>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//             </section>
           
                
                    
            
//         </>
//     )
// }
// export default Contactus

import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Contactus = () => {
    const MySwal = withReactContent(Swal);
    const URL = "http://localhost:3001/addContact";
    const [contact, setContact] = useState({ name: "", email: "", phone: "", query: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setContact((currVal) => {
            return { ...currVal, [e.target.name]: e.target.value };
        });
        // Clear validation error when user starts typing
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handelForm = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const res = await axios.post(URL, contact);
                console.log(res.data);

                MySwal.fire({
                    title: "Contacts Us",
                    text: res.data,
                    icon: "question"
                    
                });
                window.location.reload();

            } catch (err) {
                console.log("error" + err.message);
            }
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!contact.name) {
            errors.name = "Name is required.";
        } else if (!/^[A-Za-z ]+$/.test(contact.name)) {
            errors.name = "Name must contain only alphabetic characters and spaces.";
        }
        if (!contact.email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(contact.email)) {
            errors.email = "Invalid email address.";
        }
        if (!contact.query) {
            errors.query = "Query is required.";
        }
        if (!contact.phone) {
            errors.phone = "Phone number is required.";
        } else if (!/^\d+$/.test(contact.phone)) {
            errors.phone = "Phone number must contain only numeric characters.";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0; // Returns true if no errors
    };

    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#7E8F74", backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12" style={{ marginTop: "25px", marginLeft: "200px" }}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <h1 style={{ textAlign: "center", marginTop: "5px" }}>Contact Us</h1><br />
                                        <label htmlFor="exampleInputText" className="form-label" style={{ color: "blue" }}>Name</label>
                                        <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Enter Name" name="name" value={contact.name} onChange={handleChange} />
                                        {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: "blue" }}>Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" name="email" value={contact.email} onChange={handleChange} />
                                        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputTextarea" className="form-label" style={{ color: "blue" }}>Query</label>
                                        <textarea className="form-control" id="exampleInputTextarea" rows="3" placeholder="Enter your query" name="query" value={contact.query} onChange={handleChange}></textarea>
                                        {errors.query && <div style={{ color: "red" }}>{errors.query}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="typePhone" style={{ color: "blue" }}>Phone</label>
                                        <input type="tel" id="typePhone" className="form-control" placeholder="Enter number" name="phone" value={contact.phone} onChange={handleChange} />
                                        {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}
                                    </div>
                                    <div className="d-grid gap-2 col-md-6 col-sm-12 mx-auto" style={{ textAlign: 'center' }}>
                                        <button type="submit" className="btn btn-primary mb-3" onClick={handelForm}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contactus;
