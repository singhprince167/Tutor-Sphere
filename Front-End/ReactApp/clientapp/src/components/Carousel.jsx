import React from 'react';
import Counselling from './Counselling';

function Carousel() {
  const handleCarouselControl = (direction) => {
    const carousel = document.getElementById('carouselExampleControls');
    if (direction === 'prev') {
      carousel && carousel.carousel && carousel.carousel('prev');
    } else if (direction === 'next') {
      carousel && carousel.carousel && carousel.carousel('next');
    }
  };

  return (
    <>
    <div className="container mt-1" >
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"  // Set the interval to 2000 milliseconds (2 seconds)
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="../pics/mentor6.jpg"
              className="d-block w-100"
              alt="Mentor 1"
              style={{ height: '500px' }}
            />
          </div>
          <div className="carousel-item active">
            <img
              src="../pics/mentor4.jpg"
              className="d-block w-100"
              alt="Mentor 2"
              style={{ height: '500px' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="../pics/mentor5.jpg"
              className="d-block w-100"
              alt="Mentor 3"
              style={{ height: '500px' }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          onClick={() => handleCarouselControl('prev')}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          onClick={() => handleCarouselControl('next')}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    {/* <Counselling/> */}
    
    </>
  );
}

export default Carousel;
