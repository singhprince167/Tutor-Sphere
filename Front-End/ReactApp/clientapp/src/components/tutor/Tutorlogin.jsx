import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Tutorlogin() {
  const URL = "http://localhost:3001/Tutor/login"
  const [formData, setFormData] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const error_msg = {}
  const [error, setError] = useState({})

  function handleInputChange(event) {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value }
    })
  }

  // client side validation

  const checkEmpty = () => {
    if (!formData.email) {
      error_msg.email = 'Email field cannot be empty.'
    }
    if (!formData.password) {
      error_msg.password = 'Password can not be empty'
    }
  }


  let handleSubmit = async (event) => {
    event.preventDefault()
    setFormData({ email: "", password: "" })
    console.log(formData);
    checkEmpty()

    if (Object.keys(error_msg).length > 0) {
      setError(error_msg);
    }
    else {

      try {
        const res = await axios.post(URL, formData)
        console.log(res.data);
        if (res.data.code === 200) {
          alert("Login Successfully")
          navigate('/tutorhome')
          localStorage.setItem("Token_key", res.data.token)
        }
        else if (res.data.code === 400) {
          alert('Email or Password is incorrect!')
        }
        else {
          alert("Something went wrong!");
        }
      }

      catch (error) {
        console.log(error.message);
      }
    }
  }
    return (
      <>
        <NavBar />

       <section className="vh-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1440335680360-79703e7032f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: "1rem" }}>
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="../pics/login.jpg"
                        alt="login form"
                        className="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form method="POST" onSubmit={handleSubmit}>
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                            <span className="h1 fw-bold mb-0">Tutor Login</span>
                          </div>

                          <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                            Sign into your account
                          </h5>

                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form2Example17"
                              className="form-control form-control-lg"

                              name="email" value={formData.email} onChange={handleInputChange}
                            />
                            {error.email && <span style={{color:"red"}}>{error.email}</span>}
                            <label className="form-label" htmlFor="form2Example17">
                              Email address
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example27"
                              className="form-control form-control-lg"

                              name="password" value={formData.password} onChange={handleInputChange}
                            />

                             {error.password && <span style={{color:"red"}}>{error.password}</span>}
                            <label className="form-label" htmlFor="form2Example27">
                              Password
                            </label>
                          </div>

                          <div className="pt-1 mb-4">
                            <button className="btn btn-dark btn-lg btn-block" type="submit">
                              Login
                            </button>
                          </div>

                          {/* 
                        Uncomment the following code if you need Forgot Password and Registration links:
                        
                        <NavLink className="small text-muted" to="#!">
                          Forgot password?
                        </NavLink>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{' '}
                          <NavLink to="#!" style={{ color: "#393f81" }}>
                            Register here
                          </NavLink>
                        </p>
                      */}

                          {/* 
                        Uncomment the following code if you need Terms of Use and Privacy Policy links:
                        
                        <NavLink to="#!" className="small text-muted">
                          Terms of use.
                        </NavLink>
                        <NavLink to="#!" className="small text-muted">
                          Privacy policy
                        </NavLink> 
                      */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>

    )
  }
