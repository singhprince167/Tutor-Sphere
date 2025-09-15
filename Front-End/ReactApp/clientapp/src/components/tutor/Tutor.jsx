import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar.jsx';
import Footer from '../Footer.jsx';

function Tutor() {
  const cities = ["lucknow", "noida", "gorakhpur", "dehradun", "jaipur"];
  const standards = ["1 to 5", "6 to 8", "9 to 10", "11 and 12"];
  const URL = "http://localhost:3001/Tutor/addTutor";

  const [tutor, setTutor] = useState({
    tutorId: "",        // ✅ matches backend
    password: "",
    name: "",
    email: "",
    phone: "",
    experience: "",
    qualification: "",
    skill: "",
    gender: "",
    city: "",
    standard: "",       // ✅ lowercase matches backend
    board: []           // ✅ array of strings
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, tutor);
      alert("Tutor registered successfully ✅");

      // Reset form
      setTutor({
        tutorId: "",
        password: "",
        name: "",
        email: "",
        phone: "",
        experience: "",
        qualification: "",
        skill: "",
        gender: "",
        city: "",
        standard: "",
        board: []
      });
    } catch (err) {
      console.error("Error submitting form:", err.response?.data || err.message);
      alert("Error: " + (err.response?.data?.error || err.message));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      let updatedBoards = [...tutor.board];
      if (checked) updatedBoards.push(value);
      else updatedBoards = updatedBoards.filter(b => b !== value);
      setTutor({ ...tutor, board: updatedBoards });
    } else {
      setTutor({ ...tutor, [name]: value });
    }
  };

  return (
    <>
      <NavBar />
      <section
        className="d-flex align-items-center justify-content-center py-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1709644761383-a761e3a40a4b?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh"
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="bg-white p-4 p-md-5 rounded shadow">
                <h2 className="text-center mb-4" style={{ color: '#333' }}>
                  Tutor Registration Form
                </h2>
                <form onSubmit={handleSubmit}>

                  {/* Tutor ID */}
                  <div className="mb-3">
                    <label className="form-label text-primary">Tutor ID</label>
                    <input type="text" className="form-control" name="tutorId" value={tutor.tutorId} onChange={handleChange} placeholder="Enter Tutor ID" />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="form-label text-primary">Password</label>
                    <input type="password" className="form-control" name="password" value={tutor.password} onChange={handleChange} placeholder="Enter Password" />
                  </div>

                  {/* Name */}
                  <div className="mb-3">
                    <label className="form-label text-primary">Name</label>
                    <input type="text" className="form-control" name="name" value={tutor.name} onChange={handleChange} placeholder="Enter Name" />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label text-primary">Email</label>
                    <input type="email" className="form-control" name="email" value={tutor.email} onChange={handleChange} placeholder="Enter Email" />
                  </div>

                  {/* Phone */}
                  <div className="mb-3">
                    <label className="form-label text-primary">Phone</label>
                    <input type="tel" className="form-control" name="phone" value={tutor.phone} onChange={handleChange} placeholder="Enter Phone" />
                  </div>

                  {/* Experience */}
                  <div className="mb-3">
                    <label className="form-label text-primary">Experience</label>
                    <input type="text" className="form-control" name="experience" value={tutor.experience} onChange={handleChange} placeholder="Enter Experience" />
                  </div>

                  {/* Qualification */}
                  <div className="mb-3">
                    <label className="form-label text-primary">Qualification</label>
                    <input type="text" className="form-control" name="qualification" value={tutor.qualification} onChange={handleChange} placeholder="Enter Qualification" />
                  </div>

                  {/* Skill */}
                  <div className="mb-3">
                    <label className="form-label text-primary">Skill</label>
                    <input type="text" className="form-control" name="skill" value={tutor.skill} onChange={handleChange} placeholder="Enter Skill (e.g., React, JS)" />
                  </div>

                  {/* Gender */}
                  <div className="mb-3">
                    <label className="form-label text-primary d-block">Gender</label>
                    <div className="d-flex gap-3">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="male" checked={tutor.gender === "male"} onChange={handleChange} />
                        <label className="form-check-label">Male</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="female" checked={tutor.gender === "female"} onChange={handleChange} />
                        <label className="form-check-label">Female</label>
                      </div>
                    </div>
                  </div>

                  {/* City */}
                  <div className="mb-3">
                    <label className="form-label text-primary">City</label>
                    <select className="form-select" name="city" value={tutor.city} onChange={handleChange}>
                      <option value="">Select City</option>
                      {cities.map((city, index) => <option key={index} value={city}>{city}</option>)}
                    </select>
                  </div>

                  {/* Standard */}
                  <div className="mb-3">
                    <label className="form-label text-primary">Standard</label>
                    <select className="form-select" name="standard" value={tutor.standard} onChange={handleChange}>
                      <option value="">Select Standard</option>
                      {standards.map((s, index) => <option key={index} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Boards */}
                  <div className="mb-3">
                    <label className="form-label text-primary d-block">Boards</label>
                    <div className="d-flex flex-wrap gap-3">
                      {["CBSE", "UP", "ICSE"].map((board, index) => (
                        <div className="form-check" key={index}>
                          <input className="form-check-input" type="checkbox" name="board" value={board} checked={tutor.board.includes(board)} onChange={handleChange} />
                          <label className="form-check-label">{board}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="d-grid mt-4">
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Tutor;
