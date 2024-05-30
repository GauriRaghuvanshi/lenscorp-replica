import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image from '../../assets/vectorAi.webp'; // Replace with your image path
import video from '../../assets/video.mp4';

const MeetTruAI = () => {
  return (
    <Container className="mt-4" style={{ maxWidth: '1000px', marginBottom: '150px' }}>
      <Row>
        <Col xs={4}>
          <img src={image} alt="Tru-AI" style={{ width: '100%', maxWidth: '200px' }} /> {/* Adjust width and styles as needed */}
        </Col>
        <Col xs={4} className="text-center">
          <h3>Meet Tru-AI</h3>
          <h5>Design. Create. Deploy.</h5>
          <p>... the Future of AI | Power to EDIT</p>
          <p>Based on Your Website & Traffic Trends, Tru-AI Optimizes Your Website.</p>
          <Button variant="primary" className="mt-2">Learn More</Button>
        </Col>
        <Col xs={4} className="text-right">
          <video controls style={{ width: '100%' }}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </Container>
  );
};

export default MeetTruAI;
