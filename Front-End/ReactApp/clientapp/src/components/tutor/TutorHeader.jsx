import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function TutorHeader
() {
    const navigate=useNavigate()
    const token_data=localStorage.getItem("Token_key")
    const logout=(e)=>{
        e.preventDefault()
        if (!token_data)
        {
            navigate("/tutorlogin")
        }
        else
        {
            localStorage.removeItem('Token_key')
            navigate("/tutorlogin")
        }
    }
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-info text-dark">

                <div className="container-fluid">

                    <button
                        data-mdb-collapse-init
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        {/* <NavLink className="navbar-brand mt-2 mt-lg-0" to="#">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height="15"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </NavLink> */}

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="btn btn-outline-warning" aria-current="page" to="/tutorhome"><i className="fas fa-home"></i> Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/feedback">Feedback</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/addUploadResource">Resourse</NavLink>
                            </li>
                            <li className="nav-item dropdown" >
                                <NavLink className="btn btn-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                Query
                                </NavLink>
                                <ul className="dropdown-menu" >

                                    <li><NavLink className="btn btn-danger" to="/pendingquery">Pending</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="btn btn-success" to="/AllAnswered">Answered</NavLink></li>
                                </ul>
                            </li >
                            
                           
                            
                            
                            <li className="nav-item dropdown" >
                                <NavLink className="btn btn-secondary" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Message
                                </NavLink>
                                <ul className="dropdown-menu" >

                                    <li><NavLink className="btn btn-primary" to="/compose_message">Compose</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="btn btn-primary" to="/tutor_inbox">Inbox</NavLink></li>
                                </ul>
                            </li >
                            <li className="nav-item" style={{textAlign:"right"}}>
                                <NavLink className="btn btn-danger" to="#" onClick={logout} >Logout</NavLink>
                            </li>
                        </ul>

                    </div>



                    

                </div>

            </nav>
        </>
        
    )
}

export default TutorHeader


