
import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import TutorHeader from './TutorHeader';
import Footer from '../Footer';

function UploadResource() {
  const selecttype = ["PDF", "VIDEO", "IMAGE"]; // Define selecttype array here
  const URL = "http://localhost:3001/admin/addUploadResource";

  const [UploadResource, setUploadResource] = useState({
    name: "",
    email: "",
    selecttype: "",
    date: new Date(), // Adding a new date state here
    Description: ""
  });
  const [photo, setPhoto] = useState("");

  const handleChange = (e) => {
    setUploadResource({ ...UploadResource, [e.target.name]: e.target.value });
  };

  // Handler for date change
  const handleDateChange = (date) => {
    setUploadResource({ ...UploadResource, date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form_data = new FormData();
      form_data.append("name", UploadResource.name);
      form_data.append("email", UploadResource.email);
      form_data.append("selecttype", UploadResource.selecttype);
      form_data.append("date", UploadResource.date); // Format the date
      //form_data.append("date", UploadResource.date.toISOString().slice(0, 10)); // Format the date
      form_data.append("Description", UploadResource.Description);

      form_data.append("photo", photo);

      const response = await axios.post(URL, form_data);
      alert(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <TutorHeader />
      <section className="" style={{ backgroundColor: "#9A616D" }}>
        <div className="container">
          <div className="row align-items-top">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">Upload Resource<br />Details</h1>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={handleSubmit} method='post'>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" value={UploadResource.name} name="name" onChange={handleChange} />
                          <label className="form-label" htmlFor="form3Example1">Name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="email" id="form3Example2" className="form-control" value={UploadResource.email} name="email" onChange={handleChange} />
                          <label className="form-label" htmlFor="form3Example2">Email</label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <select className='form-select' name='selecttype' required id='selecttype' style={{ marginBottom: '20px' }} onChange={handleChange} value={UploadResource.selecttype}>
                        <option value="">Select Type</option>
                        {selecttype.map((type, index) => (
                          <option value={type} key={index}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <DatePicker selected={UploadResource.date} onChange={handleDateChange} className="form-control"
                        dateFormat={'dd-MM-yyyy'}
                        showYearDropdown
                      />

                    </div>

                    <div className="form-outline mb-4">
                      <input type="file" id="form3Example3" className="form-control" onChange={(e) => setPhoto(e.target.files[0])} name="photo" />
                      <label className="form-label" htmlFor="form3Example3">File Name</label>
                    </div>

                    <div class="form-group">
                      <label for="exampleFormControlTextarea1" >Description</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        value={UploadResource.Description} name="Description" onChange={handleChange}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-5" style={{ padding: '5px 20px', fontSize: '25px', }} >
                      Upload Resource
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default UploadResource;

