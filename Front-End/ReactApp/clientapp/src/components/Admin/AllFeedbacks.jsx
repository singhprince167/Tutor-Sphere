import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import Footer  from '../Footer';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function AllFeedback() {
    const [userFeedback, setUserfeedback] = useState([])
    const URL = "http://localhost:3001/admin/allFeedbacks"
     const navigate=useNavigate()
    useEffect(() => {
        const token_data=localStorage.getItem("Token_key")
        if (!token_data) {
            navigate("/adminlogin")
        }
        const fetchData = async (req, res) => {
            try {
                let response = await axios.get(URL)
                setUserfeedback(response.data);
            } catch (err) {
                console.log("Error")
            }

        }
        fetchData()
    })
    return (
        <>
        <AdminHeader></AdminHeader>
            <h1 style={{ textAlign: "center", textDecorationColor:"ButtonHighlight"}}>User Feedback.</h1>
            <div className='row'>
                {
                    userFeedback.map((e) => {
                        return (
                            <div className='col-4'>
                                <div className='card' style={{ marginLeft: "50px" }}>
                                    <div className='card-body'>
                                        <h5 className='card-title'>Remark: {e.remarks}</h5>
                                        <h5 className='card-title'>Email: {e.email} </h5>
                                        <h5 className='card-title'>Posted By: {e.name}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <Footer />
        </>

    )
}


