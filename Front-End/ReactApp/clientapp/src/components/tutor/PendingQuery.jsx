import TutorHeader from "./TutorHeader";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Tutor_Inbox() {
    //  const token_data = localStorage.getItem("Token_key");
    const [messageinbox, setMessageInbox] = useState([]);
    const [Answer, setAnswer] = useState("")
    const [id, setId] = useState("")


    const URL = "http://localhost:3001/tutor/pendingquery";
    const URL1 = "http://localhost:3001/tutor/update"

    const navigate = useNavigate();



    useEffect(() => {
        const token_data = localStorage.getItem("Token_key");
        if (!token_data) {
            navigate("/tutorlogin");

        }
        const fetchData = async () => {
            const params = {
                Tutor_id: token_data
            };

            try {
                const response = await axios.get(URL, { params });
                setMessageInbox(response.data);

                


            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();
    }, []);

    const handleAnswer = (e, id) => {

        const { value } = e.target;
        setAnswer(value)
        setId(id)

    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post(URL1, { id, Answer })
            console.log(response.data);
            if (response) {
                alert("Response sent successfully");
                // Reload the page
                window.location.reload();
              }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <TutorHeader />
            <div className="container mt-4">
                <h2 className="text-center mb-4">Questions from Users</h2>
                <div className="row">
                    <div className="col">
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">User ID</th>
                                    <th scope="col">Questions</th>
                                    <th scope="col">Response</th>
                                    <th scope="col"></th>

                                </tr>
                            </thead>
                            <tbody>
                                {messageinbox.map((mi, index) => (
                                    <tr key={index}>
                                        <td>{mi.User_id}</td>
                                        <td>{mi.Questions}</td>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="Answer"
                                                onChange={(e) => handleAnswer(e, mi._id)}


                                            />
                                        </td>
                                        <td>
                                            <button className="btn btn-primary" type="submit"
                                                onClick={handleSubmit}>send</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Tutor_Inbox;
