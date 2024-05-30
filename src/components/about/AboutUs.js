import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img from '../../assets/aboutLatest.webp'

const AboutUs = () => {
  return (
    <>
      <h1 className="mt-4 mb-4 text-center">About Us</h1>
      <Container className="mt-4">
        <div className="bg-light p-4">
          <Row>
            <Col xs={12} md={6} className="text-center">
              <h1>Welcome To LENS</h1>
              <p className="mb-4">We put our hearts, souls and sweat into designing and developing custom AI-powered solutions for your business so you don’t have to.</p>
              <button className="btn btn-outline-primary">Learn More</button>
            </Col>
            <Col xs={12} md={6}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: 'auto',
                  maxWidth: 400,
                  aspectRatio: 1,
                  overflow: 'hidden',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;