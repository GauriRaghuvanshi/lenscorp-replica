import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import backgroundImage from '../../assets/Desktop_-_23_u3ypg0.webp'; // Adjust the path as necessary

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: hovered ? 'white' : 'black',
    color: hovered ? 'black' : 'white',
    border: hovered ? '2px solid black' : 'none',
    transition: 'all 0.3s ease',
    padding: '12px 24px',
    fontSize: '1.2rem',
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingLeft: '100px',
  };

  const textStyle = {
    color: 'black', // Set text color to black
    textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', // Add white shadow for better readability
  };

  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-start text-left vh-100" style={containerStyle}>
      <h1 className="display-4" style={{ ...textStyle, fontSize: '3rem', fontWeight: 'bold' }}>
        We are at the<br />forefront of AI
      </h1>
      <p className="lead" style={textStyle}>
        From Conserving Wildlife to Automatically<br /> Generating Caricatures - <b>We Do It All</b>
      </p>
      <Button 
        variant="primary" 
        className="mt-2" 
        style={buttonStyle} 
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}
        onClick={() => window.location.href = '/company'}
      >
        Learn More
      </Button>
    </Container>
  );
};

export default Hero;
