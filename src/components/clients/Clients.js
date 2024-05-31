import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import client1 from "../../assets/client1.webp";
import client2 from "../../assets/client2.webp";
import client3 from "../../assets/client3.webp";
import client4 from "../../assets/client4.webp";
import "../clients/Client.css"; 

const Clients = () => {
  return (
    <> <Button variant="outlined" className="mt-2" size="lg" href="/blog" style={{ display: 'block', margin: '0 auto' , maxWidth: '200px', textDecoration: 'none', justifyItems: 'center'}}>
    Explore More
  </Button>
  
    <Container className="my-4">

      <Row className="text-center my-4">
        <Col>
          <h1>We Work With Amazing Clients</h1>
        </Col>
      </Row>
      <Row className="clients-row">
        <Col className="client-col" xs={3}>
          <img src={client1} alt="Client 1" />
        </Col>
        <Col className="client-col" xs={3}>
          <img src={client2} alt="Client 2" />
        </Col>
        <Col className="client-col" xs={3}>
          <img src={client3} alt="Client 3" />
        </Col>
        <Col className="client-col" xs={3}>
          <img src={client4} alt="Client 4" />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Clients;
