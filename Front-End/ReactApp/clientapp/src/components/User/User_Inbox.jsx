import Footer from "../Footer";
import UserHeader from "../User/UserHeader";
import { useNavigate, } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function User_Inbox() {


    const [messageinbox, setMessageInbox] = useState([]);
   
    const URL = "http://localhost:3001/User/User_inbox";
    const navigate=useNavigate()


    useEffect(() => {
        const token_data=localStorage.getItem("Token_key")
        console.log(token_data);
        if(!token_data){
            navigate("/Userlogin")
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
        <UserHeader/>
        <h2 className="text-center">This is User Inbox</h2>

        <div className="row">
                <table className="table mx-auto"> {/* mx-auto class added here   table-dark */}
                    <thead>
                        <tr>
                        <th scope="col">#</th>

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

export default User_Inbox;