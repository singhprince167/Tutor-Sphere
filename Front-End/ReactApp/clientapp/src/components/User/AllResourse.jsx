import React, { useEffect, useState } from 'react'
import UserHeader from './UserHeader'
import Footer from '../Footer'


import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AllResourse() {
    const [UserResourse, setUserResourse] = useState([])
    const URL = "http://localhost:3001/User/allresourse"
    const navigate = useNavigate()
    useEffect(() => {
        const token_data = localStorage.getItem("Token_key")
        if (!token_data) {
            navigate("/Userlogin")
        }
        const fetchData = async (req, res) => {
            try {
                let response = await axios.get(URL)
                setUserResourse(response.data);
            } catch (err) {
                console.log("Error")
            }

        }
        fetchData()
    })
    return (
        <>
        <UserHeader></UserHeader>
            <h1 style={{ textAlign: "center", textDecorationColor: "ButtonHighlight" }}>All Resourse by Tutors</h1>
            <div className='row'>
                {
                    UserResourse.map((e) => {
                        return (
                            <div className='col-4'>
                                <div className='card' style={{ marginLeft: "50px" }}>
                                    <div className='card-body'>
                                        
                                        
                                        <h5 className='card-title'>Posted By: {e.name}</h5>
                                        <h5 className='card-title'>Email: {e.email} </h5>
                                        <h5 className='card-title'>Type: {e.selecttype}</h5>
                                        <h5 className='card-title'>Date: {e.date} </h5>
                                        <h5 className='card-title'>Description: {e.Description}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <Footer></Footer>

        </>

    )
}

export default AllResourse
