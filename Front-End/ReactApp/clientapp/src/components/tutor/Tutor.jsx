import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import NavBar from '../NavBar.jsx'
import Footer from '../Footer.jsx'


function Tutor() {
    const cities=["lucknow", "noida","gorakhpur", "dehradun", "jaipur"]
    const standards=["1 to 5", "6 to 8", "9 to 10", "11 and 12"]
    const URL = "http://localhost:3001/Tutor/addTutor"

    const [tutor, setTutor] = useState({ id: "", password: "",
     name: "", email: "", phone: "", experience: "", qualification: "", 
     skill: "", gender: "", city: "", Standard: "" ,board:"" });
    const handleSubmit = async (e) => {
        e.preventDefault();
    console.log(tutor);
        try {
            const response = await axios.post(URL, tutor)
            console.log(response.data);
            setTutor({ id: "", password: "", name: "",
             email: "", phone: "", experience: "", qualification: "", 
             skill: "", gender: "", city: "", Standard: "",  board:"" });
            console.log(tutor);
        }
        catch (err) {
            console.log(err.message);
        }
    }
    const handleChange = (e) => {
        
        //  const {id,password,name,email,phone,experience,qualification,skill,gender,city,boards,Standard}=e.target 
        //  if (name==="ischecked"){
        //     setTutor((prevstate)=>(
        //         {...prevstate,boards:{...prevstate.boards,[name]:checked}}
        //     ))
        //  }
         setTutor({ ...tutor, [e.target.name]: e.target.value })


    }
    // const  handleCheckboxChange=(e)=>{
    //   const value=e.target.value
    //   const checked=e.target.checked;
    //   if(checked){
    //     setTutor({
    //         ...tutor,value
    //     })

    //   }
    //   else{
    //     setTutor(tutor.filter((e)=>(
    //         e!==value
    //     )))

    //   }
    // }

    return (
        <>
        <NavBar/>
        <section className="vh-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1709644761383-a761e3a40a4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>

            <div className="d-flex justify-content-center align-item-center  vh-300 " style={{minHeight:"1050px"}}  >
                <div className="bg-white p-3 rounded w-50 mt-3 mb-3" style={{ height: "100%", width: "100%" }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{
                            textAlign: 'center', backgroundColor: '#f0f0f0',
                            padding: '5px',
                            border: '1px solid #ccc',
                            borderRadius: '1px',
                            margin: '5px',
                        }}><h1>Tutor Registration form</h1></div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText" style={{ color: "blue" }}>ID</label>
                            <input type="text" className="form-control"
                             id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Id" style={{ marginBottom: '20px' }} name='id' onChange={handleChange} value={tutor.id}/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" style={{ color: "blue" }}>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{ marginBottom: '20px' }} name='password' onChange={handleChange} value={tutor.password} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText" style={{ color: "blue" }}>Name</label>
                            <input type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder="Enter Name" style={{ marginBottom: '20px' }} name='name' onChange={handleChange} value={tutor.name} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" style={{ color: "blue" }}>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={tutor.email} placeholder="Enter email" style={{ marginBottom: '20px' }} name='email' onChange={handleChange} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputphone" style={{ color: "blue" }}>Phone</label>
                            <input type="phone" className="form-control" id="exampleInputphone" aria-describedby="phoneHelp" value={tutor.phone} placeholder="Enter phone" style={{ marginBottom: '20px' }} name='phone' onChange={handleChange} />

                        </div>
                        <div>
                            <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref" style={{ color: "blue", marginBottom: '20px' }}>Experience:-</label>
                            <input type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp" value={tutor.experience} placeholder="Enter Experience" style={{ marginBottom: '20px' }} name='experience' onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="exampleInputText" style={{ color: "blue", }}>Qualification</label>
                            <input type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp" value={tutor.qualification} placeholder="Enter Your Qualification " style={{ marginBottom: '20px' }} name='qualification' onChange={handleChange} />
                        </div>
                        <label style={{ color: "blue", marginBottom: '20px' }}>
                            Enter a skill:
                            <input
                                type="text"
                                onChange={handleChange}
                                placeholder="e.g., JavaScript, React, CSS"
                                name='skill'
                                value={tutor.skill}



                            />
                        </label >
                        <div>
                            <label style={{ color: "blue" }}>Select your gender:</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" id="exampleRadios1" onChange={handleChange} value="male"  checked={tutor.gender==="male"}/>
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" id="exampleRadios2" onChange={handleChange} checked={tutor.gender==="female"} value="female" />
                                <label className="form-check-label" htmlFor="exampleRadios2" style={{ marginBottom: '20px' }}>
                                    Female
                                </label>
                            </div>
                        </div>
                        <div>
                        <label style={{ color: "blue" }}>Select your City:</label>
                        <select className='form-select' 
                name='city' required id='city' style={{marginBottom: '20px'}}  onChange={handleChange} value={tutor.city}
                >
                    <option value="">Select City</option>
                    {cities.map((city,index)=>(
                        <option value={city} key={index}>{city}</option>
                    )
                    )}
                   
                </select>
                        </div>
                        

                            {/* <div>
                                <label>
                                    Board:
                                    <br /> 
                                    <label htmlFor="c1">UP</label>
                                    <input type="checkbox" id="c1" name='option' value="UP"  onChange={handleCheckboxChange}/>
                                    <br />
                                    <label htmlFor="c2">ICSE</label>
                                    <input type="checkbox" id="c2" name='option' value="ICSE" onChange={handleCheckboxChange}/>
                                    <br />
                                    <label htmlFor="c3">CBSE</label>
                                    <input type="checkbox" id="c3" name='option' value="CBSE"  onChange={handleCheckboxChange}/>

                                </label>
                            </div> */}




                            <div>
                            <label style={{ color: "blue"  }}>Select your Standard:</label>
                            <select className='form-select' 
                name='Standard' required id='' style={{marginBottom: '20px'}}  onChange={handleChange} value={tutor.Standard}
                >
                    <option value="">Standard</option>
                    {standards.map((s,index)=>(
                        <option value={s} key={index}>{s}</option>
                    )
                    )}
                   
                </select>
                            </div>

                            {/* Other form fields */}
                        <div>
                            <label style={{ color: "blue"  }} >
                                Select Boards:
                                {["CBSE", "UP", "ICSE"].map((board, index) => (
                                    <div key={index}>
                                        <label htmlFor={board}>{board}</label>
                                        <input
                                            type="checkbox"
                                            id={board}
                                            name="board"
                                            value={board}
                                            checked={tutor.board.includes(board)}
                                            onChange={handleChange}
                                        />
                                    </div>
                                ))}
                            </label>
                        </div>
                        {/* Other form fields */}

            

                        <div className="d-grid gap-2 col-md-6 col-sm-12 mx-auto">
                        <button type="submit" className="btn btn-primary" style={{height:"50px"}} >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            </section>
<Footer/>
        </>
    )
}

export default Tutor
