import React, { useEffect, useState } from 'react'
import UserHeader from './UserHeader'
import Footer from '../Footer'
import { Link } from 'react-router-dom';


import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AllTutorsOnUser() {
    const [AllTutor, setAllTutor] = useState([])
    const URL = "http://localhost:3001/User/alltutorsOnUserHeader"
    const navigate = useNavigate()
    useEffect(() => {
        const token_data = localStorage.getItem("Token_key")
        if (!token_data) {
            navigate("/Userlogin")
        }
        const fetchData = async (req, res) => {
            try {
                let response = await axios.get(URL)
                setAllTutor(response.data);
            } catch (err) {
                console.log("Error")
            }

        }
        fetchData()
    })
    return (
        <>
        <UserHeader></UserHeader>
            <h1 style={{ textAlign: "center", textDecorationColor: "ButtonHighlight" }}>All Tutors</h1>
            <div className='row'>
                {
                    AllTutor.map((e,key) => {
                        return (
                            <div className='col-4'>
                                <div className='card' style={{ marginLeft: "50px" }}>
                                    <div className='card-body'>
                                        
                                        <h1 className='card-title'>Tutor-{++key}</h1>
                                        <h5 className='card-title'>Name: {e.name}</h5>
                                        <h5 className='card-title'>Email: {e.email} </h5>
                                        <h5 className='card-title'>Phone: {e.phone}</h5>
                                        <Link to={`/meetingrequest/${e.email}`}><i className='' style={{ fontSize: "25px" }}>Send Request</i></Link>
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

export default AllTutorsOnUser
