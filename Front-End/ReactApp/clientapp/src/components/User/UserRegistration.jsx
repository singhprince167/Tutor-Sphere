// import { useState } from "react"
// import React from "react"
// import axios from "axios"
// import NavBar from '../NavBar.jsx'
// import Footer from '../Footer.jsx'


// function UserRegistration() {
//     const URL = "http://localhost:3001/user/addUser"
//     const [User, setUser] = useState({ name: "", email: "", password: "", phone: "" });
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(URL, User)
//             console.log(response.data);
//             setUser({ name: "", email: "", password: "", phone: "" });
//             console.log(User);
//             alert("Your Registration successfully");
//             window.location.reload();
//         }
//         catch (err) {
//             console.log(err.message);
//         }
//     }
//     const handleChange = (e) => {
//         setUser({ ...User, [e.target.name]: e.target.value })
//     }

//     return (
//         <>
//             <NavBar />
//             <section className="vh-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1709644761383-a761e3a40a4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
             
//             <div className="d-flex justify-content-center align-item-center  vh-100 ">
//                 <div className="bg-white p-3 rounded w-45 mt-5 mb-4" style={{ height: "70%" }} >
//                     <h1 style={{
//                         textAlign: 'center', backgroundColor: '#f0f0f0',
//                         padding: '5px',
//                         border: '1px solid #ccc',
//                         borderRadius: '1px',
//                         margin: '5px',
//                         marginBottom: '20px'
//                     }}>User Registration Form</h1>
//                     <form className="container sm-4" onSubmit={handleSubmit} >
//                         <div className="form-group" >
//                             <label for="exampleInputText" style={{ color: "blue" }} >Name</label>
//                             <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Enter Name" style={{ marginBottom: '20px' }} name="name" onChange={handleChange} />
//                             {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
//                         </div>
//                         <div className="form-group">
//                             <label for="exampleInputEmail1" style={{ color: "blue" }}>Email</label>
//                             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{ marginBottom: '20px' }} name="email" onChange={handleChange} />
//                             {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
//                         </div>
//                         <div className="form-group">
//                             <label for="exampleInputPassword1" style={{ color: "blue" }}>Password</label>
//                             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" style={{ marginBottom: '20px' }} name="password" onChange={handleChange} />
//                         </div>

//                         <div className="form-outline">

//                             <label className="form-label" for="typePhone" style={{ color: "blue" }}>Phone </label>
//                             <input type="tel" id="typePhone" className="form-control" placeholder="Enter number" style={{ marginBottom: '20px' }} name="phone" onChange={handleChange} />
//                         </div>
//                         <div className="d-grid gap-2 col-md-6 col-sm-12 mx-auto" >
//                             <button type="submit" className="btn btn-primary" >Submit</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//                     </section>
//             <Footer />
//         </>
//     )
// }
// export default UserRegistration

import { useState } from "react";
import axios from "axios";
import NavBar from '../NavBar.jsx';
import Footer from '../Footer.jsx';

function UserRegistration() {
    const URL = "http://localhost:3001/user/addUser";
    const [user, setUser] = useState({ name: "", email: "", password: "", phone: "" });
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post(URL, user);
                console.log(response.data);
                // Clear form fields after successful submission
                setUser({ name: "", email: "", password: "", phone: "" });
                // Clear errors
                setErrors({});
                alert("Your Registration was successful");
                window.location.reload();
            } catch (err) {
                console.log(err.message);
            }
        }
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // Clear validation error when user starts typing
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateForm = () => {
        const errors = {};
        if (!user.name) {
            errors.name = "Name is required.";
        } else if (!/^[A-Za-z]+$/.test(user.name)) {
            errors.name = "Name must contain only alphabetic characters.";
        }
        if (!user.email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = "Invalid email address.";
        }
        if (!user.password) {
            errors.password = "Password is required.";
        } else if (user.password.length < 6) {
            errors.password = "Password must be at least 6 characters long.";
        }
        if (!user.phone) {
            errors.phone = "Phone number is required.";
        } else if (!/^\d+$/.test(user.phone)) {
            errors.phone = "Phone number must contain only numeric characters.";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0; // Returns true if no errors
    };

    return (
        <>
            <NavBar />
            <section className="vh-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1709644761383-a761e3a40a4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                <div className="d-flex justify-content-center align-item-center vh-100">
                    <div className="bg-white p-3 rounded w-45 mt-5 mb-4" style={{ height: "70%" }}>
                        <h1 style={{
                            textAlign: 'center', backgroundColor: '#f0f0f0',
                            padding: '5px',
                            border: '1px solid #ccc',
                            borderRadius: '1px',
                            margin: '5px',
                            marginBottom: '20px'
                        }}>User Registration Form</h1>
                        <form className="container sm-4" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputText" style={{ color: "blue" }}>Name</label>
                                <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Enter Name" style={{ marginBottom: '20px' }} name="name" onChange={handleChange} />
                                {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" style={{ color: "blue" }}>Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{ marginBottom: '20px' }} name="email" onChange={handleChange} />
                                {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" style={{ color: "blue" }}>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" style={{ marginBottom: '20px' }} name="password" onChange={handleChange} />
                                {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
                            </div>
                            <div className="form-outline">
                                <label className="form-label" htmlFor="typePhone" style={{ color: "blue" }}>Phone</label>
                                <input type="tel" id="typePhone" className="form-control" placeholder="Enter number" style={{ marginBottom: '20px' }} name="phone" onChange={handleChange} />
                                {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}
                            </div>
                            <div className="d-grid gap-2 col-md-6 col-sm-12 mx-auto">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default UserRegistration;

