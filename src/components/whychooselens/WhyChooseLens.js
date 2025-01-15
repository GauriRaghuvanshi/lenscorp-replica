import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Import the checkmark icon

const WhyChooseLens = () => {
  return (
    <Container className="my-4">
      <h4 className="text-center my-4" marginTop="100px">Why Choose Lens</h4>
      <div className="NewQuestions_underline__PkZOO"></div>

      <Row className="text-center my-4">
        <Col>
          <h1>AI-driven solutions backed by science</h1>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
        <div style={{ margin: '0 auto', maxWidth: '300px', marginLeft: '400px' }}> {/* Add left margin */}
  <ul style={{ listStyle: 'none', padding: 0 }}> {/* Remove default styling */}
    <li style={{ marginBottom: '10px' }}> {/* Add margin bottom for space between items */}
      <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px', color: 'green', fontSize: '2rem' }} />
      State-of-the-art solutions
    </li>
    <li style={{ marginBottom: '10px' }}>
      <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px', color: 'green', fontSize: '2rem' }} />
      Fast & Efficient
    </li>
    <li style={{ marginBottom: '10px' }}>
      <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px', color: 'green', fontSize: '2rem' }} />
      No extra computation fee
    </li>
    <li style={{ marginBottom: '10px' }}>
      <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px', color: 'green', fontSize: '2rem' }} />
      No licensing fee
    </li>
  </ul>
</div>

        </Col>
        <Col md={6}>
          <div style={{ margin: '5px', maxWidth: '300px' }}> {/* Center the list with some max width */}
            <ul style={{ listStyle: 'none', padding: 0 }}> {/* Remove default styling */}
              <li style={{ marginBottom: '10px' }}> {/* Add margin bottom for space between items */}
                <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px', color: 'green', fontSize: '2rem' }} />
                Lifetime support & upgrades
              </li>
              <li style={{ marginBottom: '10px' }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px', color: 'green', fontSize: '2rem' }} />
                Plug-and-Play
              </li>
              <li style={{ marginBottom: '10px' }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px', color: 'green', fontSize: '2rem' }} />
                24x7 Progress Monitoring
              </li>
              <li style={{ marginBottom: '10px' }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px', color: 'green', fontSize: '2rem' }} />
                Incremental Updates
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseLens;
