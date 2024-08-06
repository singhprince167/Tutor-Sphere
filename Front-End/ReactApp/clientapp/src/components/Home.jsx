import React from 'react';
import Carousel from './Carousel';
import { NavLink } from 'react-router-dom';


const HeroSection = () => (
    <div
        className="jumbotron jumbotron-fluid text-left"
        style={{ color: '#fff' }}
    >
        <div className="container ">
        
        <div className="container">
  <div className="row">
    <div className="col-md-6">
      <h1 className="display-4" style={{ color: "#f6cd43" }}>Welcome to Tutorsphere</h1>
    </div>
    <div className="col-md-6">
      <img src="../tutorsphere2.png"
           alt="TutorSphere logo on the login page"
           className="img-fluid"
           style={{
           
             borderRadius: '1rem 0 0 1rem',
             height: 'auto',
             width: '50%',
             opacity: 0.5, // Adjust the opacity value as needed
           }}
      />
    </div>
  </div>
</div>
<p className="lead" style={{ color: "#00FF00", fontSize: "2rem" }}>
  Discover the joy of learning with our experienced tutors.
</p>
            <hr className="my-4" />
            <p>
            Welcome to Tutorsphere, your trusted partner in personalized and flexible learning. 
            Our experienced and expert tutors are dedicated to helping you achieve your learning goals,
             with tailored learning experiences designed to fit your unique needs and lifestyle.
            </p>
            <div className="btn-group">
                <NavLink
                    className="btn btn-outline-info"
                    to="/Counselling"
                    role="button"
                    style={{ marginRight: '10px' }}
                >
                    Browse Tutors
                </NavLink>
                <NavLink
                    className="btn btn-outline-info"
                    to="/tutorreg"
                    role="button"
                >
                    Sign Up as Tutor
                </NavLink>
            </div>
        </div>
    </div>
);

const VideoBackground = () => (
    <div
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
        }}
    >
        <video
            autoPlay
            loop
            muted
            style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
            }}
        >
            <source src="../videos/tutor.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
);

const WhyChooseUs = () => (
    <div className="row " style={{ backgroundcolor: "#f0f0f0", padding: "20px;",  }}>
        <div className="col-lg-6 text-right" style={{ color: "#446688"  }}>
        <marquee direction="left" scrollamount="10"></marquee>
            {/* <h2 style={{ color: "#EA2027" }}>Why Choose Tutorsphere?</h2>
            
            <p style={{ marginbottom: "20px", color: "#F9FCFF"}}>
                Our tutors are experienced and dedicated to helping you achieve your
                learning goals. We offer flexible scheduling options and personalized
                learning tailored to your needs.
            </p> */}
            {/* <ul className="list-unstyled" style={{ paddingleft: "20px", color: "#1B8B00" }}>
                <li>
                    <strong style={{ color: "#FFFFFF" }}>Expert Tutors:</strong> Our tutors have years of experience and are experts in their fields.
                </li>
                <li>
                    <strong style={{ color: "#FFFFFF" }}>Flexible Scheduling:</strong> We offer flexible scheduling options to fit your busy lifestyle.
                </li>
                <li>
                    <strong style={{ color: "#FFFFFF" }}>Personalized Learning:</strong> We offer personalized learning tailored to your unique needs and goals.
                </li>
            </ul> */}
        </div>
    </div>


);

const Home = () => (
    <div className="container">
        <HeroSection />
        <VideoBackground />
        {/* <Carousel /> */}
        <WhyChooseUs />
        
    </div>
    
    
);

    


export default Home;