import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Vision.css'; // Assuming you create this CSS file for custom styles
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.png';

const Vision = () => {
  return (
    <Container className="my-4">
      <h4 className="text-center my-4" style={{ marginTop: '100px' }}>Our Vision</h4>
      <div className="NewQuestions_underline__PkZOO"></div>
      <Row className="text-center my-4">
        <Col>
          <h1>AI for Social Good</h1>
        </Col>
      </Row>
      <Row className="vision-section">
        <Col xs={12} md={6} className="text-center">
          <img src={image1} alt="Description 1" className="vision-image" />
        </Col>
        <Col xs={12} md={6}>
          <div className="vision-text">
            <p><strong>Diversity & Fairness:</strong> When training our AI models, we consider ethical and social implications of algorithm-based decision making. Our solutions use high-quality and fairly-represented data sets to eliminate human cognitive biases.</p>
          </div>
        </Col>
        <div className="vertical-line"></div> {/* Vertical line */}
      </Row>
      <Row className="vision-section">
        <Col xs={12} md={6} className="text-center">
          <img src={image2} alt="Description 2" className="vision-image" />
        </Col>
        <Col xs={12} md={6}>
          <div className="vision-text">
            <p><strong>Regulatory Compliance:</strong> Working with clients globally, LENS acknowledges applicable data privacy regulations, such as the GDPR, HIPAA and others, in all our solutions handling sensitive data. We also ensure our algorithms allow for the required level of decision-making transparency and explainability.</p>
          </div>
        </Col>
        <div className="vertical-line"></div> {/* Vertical line */}
      </Row>
      <Row className="vision-section">
        <Col xs={12} md={6} className="text-center">
          <img src={image3} alt="Description 3" className="vision-image" />
        </Col>
        <Col xs={12} md={6}>
          <div className="vision-text">
            <p><strong>Code of Ethics:</strong> LENS believes in a just, non-violent world of equality and fairness. We prize democratic values, civil liberties and open and informed debate. When used to further these values, algorithm-based decision-making models can continue to make the world a safer, better place for everyone.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Vision;
