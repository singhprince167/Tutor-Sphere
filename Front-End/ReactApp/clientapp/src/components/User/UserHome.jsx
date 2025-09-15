
import React from 'react';
import UserHeader from './UserHeader';
import Footer from '../Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserHome() {
    const URL = "http://localhost:3001/user/profile";
    const [profile, setProfile] = useState({ name: "", email: "", phone: "", password: "" });
    const [acname ,setAcName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token_data = localStorage.getItem("Token_key");
                if (!token_data) {
                    navigate("/userlogin");
                    return;
                }
                setAcName(token_data);
                const params = { email: token_data };
                const response = await axios.get(URL, { params });
                setProfile(response.data);
            } catch (error) {
                console.log('Error', error);
                //handle error here e.g., display an error message to the user
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <UserHeader />
            <section className="vh-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1666030861215-42299dd5d70c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
     
            <div style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <marquee direction="left" scrollamount="10">
                    <h1>Welcome to the  Home Page </h1>
                    </marquee>
                </div>
            
            <div className="card" style={{ margin: "12%", backgroundColor: "skyblue", padding: "2%", width: "50%" }}>
                <div className="card-body">
                    <h1 className='card-title'>Your Name: {profile.name}</h1>
                    <h1 className='card-title'>Your Email: {profile.email}</h1>
                    <h1 className='card-title'>Your Password: {profile.password}</h1>
                    <h1 className='card-title'>Your Phone: {profile.phone}</h1>
                    <Link to="/useredit"><i className='fas fa-edit' style={{ fontSize: "36px" }}></i></Link>
                </div>
            </div>
            </section>
            <Footer />
        </>
    );
}

export default UserHome;

