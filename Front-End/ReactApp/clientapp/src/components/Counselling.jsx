import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

function Counselling() {
    return (
        <>
            {/* <NavBar/> */}
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
                <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Meet Our Counselors</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <CounselorCard
                        name="Divya"
                        imageSrc="../counselling/Divya.png"
                        description="MBA, Ph.D. in Management with years of experience (9 years in Teaching and 12 years with corporates) Certified trainer by Bharti Airtel, Vodafone India and Cambridge University."
                    />
                    <CounselorCard
                        name="Prof Dr Manu Mangattu"
                        imageSrc="../counselling/Manu.png"
                        description="Hello Friends, Manu Mangattu here. I am a Professor of English and a University Master’s degree rank holder. I offer research guidance to scholars from India and abroad. "
                    />
                    <CounselorCard
                        name="Priyanka Mishraa"
                        imageSrc="../counselling/Priyanka.png"
                        description="My teaching style is interactive. My teaching aims at explaining concepts in simple language and with examples. My counselling skills add to the teaching experience."
                    />
                    <CounselorCard
                        name="Rajani Ajish"
                        imageSrc="../counselling/Rajani.png"
                        description="I am Rajani a Compassionate High School Teacher with 13 years of experience. Dedicated to academic progress and being a mentor. "
                    />
                    <CounselorCard
                        name="Adarsh"
                        imageSrc="../counselling/Adarsh.png"
                        description="I am Adarsh Navlakha, an engineering graduate from India. I have experience of more than 7 years in offline and online training. "
                    />
                    {/* <CounselorCard
                        name="Another Counselor"
                        imageSrc="../counselling/another-counselor.png"
                        description="Description of Another Counselor"
                    /> */}
                    {/* Add more counselor cards as needed */}
                </div>
            </div>
            {/* <Footer/> */}
        </>
    );
}

function CounselorCard({ name, imageSrc, description }) {
    return (
        <div style={{ flexBasis: '15%', margin: '10px' }}>
            <img src={imageSrc} alt={name} style={{ width: '100%', height: '200px', borderRadius: '50%', marginBottom: '10px' }} />
            <div style={{ textAlign: 'center' }}>
                <h5 style={{ marginBottom: '10px' }}>{name}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Counselling;
