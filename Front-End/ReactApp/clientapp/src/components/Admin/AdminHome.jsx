import Carousel from '../Carousel'
import AdminHeader from './AdminHeader';
import Footer from '../Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function AdminHome() {
    const [acname, setAcName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token_data = localStorage.getItem('Token_key');
        console.log(`token data is ${token_data}`);
        
        if (!token_data) {
            navigate("/adminlogin");
        }
        
        setAcName(token_data);
    }, []);

    return (
        <>
            <AdminHeader />
            
           
            
            <div style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <marquee direction="left" scrollamount="10">
                    <h1>Welcome to the Admin portal of Tutorsphere!</h1>
                    </marquee>
                </div>
                <Carousel/>
            <Footer />
        </>
    );
}

export default AdminHome;

