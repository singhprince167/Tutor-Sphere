import React from 'react';
// import Carousel from './Carousel';
import { NavLink } from 'react-router-dom';

const HeroSection = () => (
  <div className="jumbotron jumbotron-fluid text-left position-relative" style={{ color: '#fff', paddingTop: '5rem', paddingBottom: '5rem' }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="display-4" style={{ color: "#f6cd43" }}>Welcome to Tutorsphere</h1>
          <p className="lead" style={{ color: "#00FF00", fontSize: "1.5rem" }}>
            Discover the joy of learning with our experienced tutors.
          </p>
          <p>
            Welcome to Tutorsphere, your trusted partner in personalized and flexible learning. 
            Our experienced tutors are dedicated to helping you achieve your learning goals,
            with tailored learning experiences designed to fit your unique needs and lifestyle.
          </p>
          <div className="btn-group flex-wrap">
            <NavLink className="btn btn-outline-info mb-2 me-2" to="/Counselling" role="button">
              Browse Tutors
            </NavLink>
            <NavLink className="btn btn-outline-info mb-2" to="/tutorreg" role="button">
              Sign Up as Tutor
            </NavLink>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="../tutorsphere2.png"
            alt="TutorSphere logo"
            className="img-fluid"
            style={{
              borderRadius: '1rem',
              maxWidth: '100%',
              height: 'auto',
              opacity: 0.5
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

const VideoBackground = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
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
  <div className="row justify-content-center text-center py-5" style={{ backgroundColor: "#f0f0f0" }}>
    <div className="col-lg-8">
      <h2 style={{ color: "#446688", marginBottom: '1.5rem' }}>Why Choose Tutorsphere?</h2>
      <p style={{ color: "#446688" }}>
        Our tutors are experienced and dedicated to helping you achieve your
        learning goals. We offer flexible scheduling options and personalized
        learning tailored to your needs.
      </p>
    </div>
  </div>
);

const Home = () => (
  <div className="container-fluid p-0">
    <VideoBackground />
    <HeroSection />
    {/* <Carousel /> */}
    <WhyChooseUs />
  </div>
);

export default Home;
