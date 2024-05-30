import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center text-center vh-100" style={{ background: 'linear-gradient(to right, #f8fafc, #e0f7fa)' }}>
      <h1 className="display-4">We are at the forefront of AI</h1>
      <p className="lead">From Conserving Wildlife to Automatically Generating Caricatures - <b>We Do It All</b></p>
      <Button variant="primary" className="mt-2">Learn More</Button>
    </Container>
  );
};

export default Hero;
