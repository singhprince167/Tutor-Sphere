import axios from "axios";
import React from "react";
import { useState } from "react";
import {  useNavigate } from 'react-router-dom';


function Adminlogin(){
    const URL="http://localhost:3001/admin/login"
    const [admin,setadmin]=useState({username:"",password:""})
    const error_message={}

    const navigate=useNavigate()

    let [error,setError]=useState({})

    //client side  validation code
    const checkEmpty=()=>{
        if(!admin.username)
        {
            error_message.username="Username is required!"
        }

        if(!admin.password)
        { 
            error_message.password='Password is required!'
        }


    }
    //function close

    const handleform=async (e)=>{
        e.preventDefault()
        try {
            // checkEmpty(admin)
            checkEmpty()
            if (Object.keys(error_message).length>0 ) {
                setError(error_message);
            }
            else{
            
            const response=await axios.post(URL,admin)
            console.log(response.data);
            setadmin({username:"",password:""});

            if(response.data.code===200)
            {
                alert("Admin exists")
                localStorage.setItem("Token_key",response.data.token)
                navigate("/admin_home")//defined in index.js
               
            }
            else if (response.data.code===404)
            {
                alert("password does not match");
            }
            else{
                alert("admin does not exitst");
            }
        }
        } catch (error) {
            console.log(error);
        }
        }



        const handlechange = (e) => {
            setadmin({...admin,[e.target.name]:e.target.value})
        }
    

    
    

    return (
        
        <>
       
            <section className="vh-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1440335680360-79703e7032f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{borderRadius: "1rem;"}}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="../pics/login.jpg"
                                        alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem;",height:"100%"}} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form onSubmit={handleform}>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219;"}}></i>
                                                    <span className="h1 fw-bold mb-0">Admin Login</span>
                                                </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px;"}}>Sign into your account</h5>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form2Example17" className="form-control form-control-lg" name="username" onChange={handlechange} />
                                                    {error.username && <div  style={{color:"red"}}>{error.username}</div>}
                                                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example27" className="form-control form-control-lg" name="password" onChange={handlechange}/>
                                                    {error.password && <div  style={{color:"red"}}>{error.password}</div>}
                                                    <label className="form-label" htmlFor="form2Example27">Password</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" >Login</button>
                                                </div>

                                                {/* <a className="small text-muted" href="#!">Forgot password?</a>
                                            <p className="mb-5 pb-lg-2" style={{color: "#393f81;"}}>Don't have an account? <a href="#!"
                                                    style={{color: "#393f81;"}}>Register here</a></p>
                                                <a href="#!" className="small text-muted">Terms of use.</a>
                                                <a href="#!" className="small text-muted">Privacy policy</a> */}
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
             
                                
               
        </>
    )
}
export default Adminlogin;