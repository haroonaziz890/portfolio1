import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Harr.css'; // CSS Import

function UncontrolledExample() {
  return (
    <div className="carousel-container">
      <Carousel fade> {/* Added Fade Effect for Smooth Transitions */}
        <Carousel.Item>
          <img
            className="d-block mx-auto custom-img"
            src={require('./0379_638345421493280276.png')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Explore the Beauty</h3>
            <p>Experience breathtaking views and stunning landscapes.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto custom-img"
            src={require('./th.jpeg')}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Adventure Awaits</h3>
            <p>Step into the world of adventure and exploration.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto custom-img"
            src={require('./0379_638345421493280276.png')}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Memories Forever</h3>
            <p>Capture moments that will last a lifetime.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
