import TutorHeader from "./TutorHeader";
import Footer from "../Footer";
import { useNavigate, } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Tutor_Inbox() {


    const [messageinbox, setMessageInbox] = useState([]);
   
    const URL = "http://localhost:3001/tutor/tutor_inbox";
    const navigate=useNavigate()


    useEffect(() => {
        const token_data=localStorage.getItem("Token_key")
        console.log(token_data);
        if(!token_data){
            navigate("/tutorlogin")
        }
        const fetchData = async () => {
            const params={
                receiver_id:token_data

            }

            try {
                const response = await axios.get(URL,{params});
                console.log(response.data);
                setMessageInbox(response.data);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, []);

    return ( 
        <>
        <TutorHeader/>
        <h2 className="text-center">Tutor Inbox</h2>

        <div className="row">
                <table className="table mx-auto"> {/* mx-auto class added here   table-dark */}
                    <thead>
                        <tr>
                        <th scope="col">*</th>

                            <th scope="col">Sender ID</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messageinbox.map((mi, index) => (
                            <tr key={index}>
                                <td>{mi.no}</td>
                                <td>{mi.sender_id}</td>
                                <td>{mi.subject}</td>
                                <td>{mi.text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
       <Footer/>
        </>
     );
}

export default Tutor_Inbox;