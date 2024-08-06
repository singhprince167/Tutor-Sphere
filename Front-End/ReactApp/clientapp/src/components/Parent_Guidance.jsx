import React from 'react';
import NavBar from  './NavBar.jsx';
import Footer from './Footer.jsx';


function Parent_Guidance() {
    return (
        <>
        {/* <NavBar/> */}
        <div style={styles.container} >
            <h1 style={styles.pageTitle}>Parent Guidance</h1>
            <div style={styles.content}>
                <h2 style={styles.subHeading}>Effective Strategies for Treating Students</h2>
                <ol style={styles.strategyList}>
                    <li>Respect: Acknowledge students' individuality, opinions, and perspectives. Respect their boundaries and privacy.</li>
                    <li>Listen actively: Show empathy and understanding towards students' concerns and ideas. Encourage open communication.</li>
                    <li>Be fair and consistent: Apply rules and consequences consistently to all students. Avoid favoritism and discrimination.</li>
                    <li>Encourage participation: Create an inclusive environment where all students feel valued and comfortable sharing their thoughts and ideas.</li>
                    <li>Set high expectations: Establish clear expectations for behavior and academic performance. Provide support to help students reach their goals.</li>
                </ol>
            </div>
        </div>

        {/* <Footer/> */}
        </>
    );
}

export default Parent_Guidance;

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        
    },
    pageTitle: {
        color: '#1a1a1a',
        fontSize: '36px',
        textAlign: 'center',
        marginBottom: '20px',
        textDecoration: 'underline',
    },
    content: {
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(to right, #ffcc80, #ffab40, #ff8a65)', // Gradient background color
    },
    subHeading: {
        color: '#333',
        fontSize: '24px',
        marginBottom: '20px',
        
    },
    strategyList: {
        listStyleType: 'decimal',
        paddingLeft: '20px',
        lineHeight: '1.6',
    },
};
