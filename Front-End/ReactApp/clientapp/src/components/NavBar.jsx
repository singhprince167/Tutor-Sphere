import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(to right, #bfe9ff, #ff6e7f)' }}>
        <div className="container">
        <NavLink className="btn btn-danger" to="/home" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>TutorSphere</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div>
          <h3 className="nav-item">
                <NavLink className="nav-link text-white" to="/searchtutor">Search Tutors</NavLink>
              </h3>
          </div> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="btn btn-outline-warning text-white" aria-current="page" to="/Home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/about">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/contact">Contact us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/feedback">Feedback</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Registration
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item text-black" to="/userreg">User Registration</NavLink></li>
                  <li><NavLink className="dropdown-item text-black" to="/tutorreg">Tutor Registration</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Login
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item text-black" to="/adminlogin">Admin</NavLink></li>
                  <li><NavLink className="dropdown-item text-black" to="/userlogin">User Login</NavLink></li>
                  <li><NavLink className="dropdown-item text-black" to="/tutorlogin">Tutor Login</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blogs
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item text-black" to="/ExamTips">Exam Tips</NavLink></li>
                  <li><NavLink className="dropdown-item text-black" to="/Counselling">Counselling</NavLink></li>
                  <li><NavLink className="dropdown-item text-black" to="/Parent_Guidance">Parent Guidance</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/searchtutor">Search Tutors</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
