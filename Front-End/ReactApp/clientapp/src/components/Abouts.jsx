import React from 'react';

function Abouts() {
  // Define your inline styles here
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'justify'
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#333',
    fontSize: '2rem' // Example of a responsive font size
  };

  const textStyle = {
    color: '#fff', // Set text color to white
    lineHeight: '1.6'
  };

  // Apply the styles directly to your JSX elements
  return ( 
    <section className="vh-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>About Us</h1>
        <h4 style={textStyle}>Each one of our high-caliber tutors is handpicked through a rigorous interview process that guarantees every tutor is brilliant, personable, and can custom tailor their teaching approach to best fit the learning style of every student. It is no coincidence that our tutors have flourished at the top 1% of their academic careers from the most prestigious universities across the nation. At Tutor Me Education, we understand that having proper guidance and support is equally important to gaining the insight needed in order to prosper. Our tutoring sessions are scheduled online or in the luxury of your own home and are carefully calculated to facilitate optimal learning. An educational instructor works with you around the clock to create a personalized curriculum and match you with an expert tutor that can best enable your academic goals.</h4>
      </div>
    </section>
  );
}

export default Abouts;
