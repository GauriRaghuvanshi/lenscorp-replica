import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const blogData = [
  {
    date: 1,
    title: "New! How AI is Optimizing Your Taxi Rides",
    description: "Discover how Artificial Intelligence is revolutionising the taxi app landscape, leading to improved efficiency, shorter wait times, and a more satisfying user experience...."
  },
  {
    date: 2,
    title: "Image Analysis",
    description: "From personalized recommendations to frictionless checkout, AI is transforming the way you shop. Discover the future of retail and how AI is making shopping faster, easier, and more enjoyable...."
  },
  {
    date: 3,
    title: "Generative AI",
    description: "In today's data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape...."
  },
];

const Blogs = () => {
  return (
    <div id="blogs">
    <Container className="my-4">
      <h4 className="text-center">Our Blogs</h4>
      <Row className="text-center my-4">
        <Col>
          <h1>Inhouse Mindscape</h1>
        </Col>
      </Row>
      <Row>
        {blogData.map((blog) => (
          <Col xs={12} md={6} key={blog.date} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{blog.date}. {blog.title}</Card.Title>
                <Card.Text>{blog.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
   
    </div>
  );
};

export default Blogs;