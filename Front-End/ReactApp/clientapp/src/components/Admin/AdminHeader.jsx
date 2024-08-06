import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function AdminHeader() {
    const navigate=useNavigate()
    const token_data=localStorage.getItem("Token_key")
    const logout=(e)=>{
        e.preventDefault()
        if (!token_data)
        {
            navigate("/adminlogin")
        }
        else
        {
            localStorage.removeItem('Token_key')
            navigate("/adminlogin")
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
                                <NavLink className="btn btn-outline-warning" aria-current="page" to="/admin_home"><i className="fas fa-home"></i> Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/adminfeedback">Feedback</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admincontact">Contact Us</NavLink>
                            </li>
                            <li className="nav-item dropdown" >
                                <NavLink className="btn btn-secondary" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    View
                                </NavLink>
                                <ul className="dropdown-menu" >

                                    <li><NavLink className="btn btn-primary" to="/alltutors">All Tutors</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="btn btn-primary" to="/allusers">All Users</NavLink></li>
                                </ul>
                            </li >
                            <li className="nav-item" style={{textAlign:"right",   }} >
                                <NavLink className="btn btn-danger" to="#" onClick={logout}  >Logout</NavLink>
                            </li>
                            
                        </ul>

                    </div>



                    

                </div>

            </nav>
        </>
        
    )
}

export default AdminHeader

