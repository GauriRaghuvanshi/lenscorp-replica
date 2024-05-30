import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';

const services = [
  {
    id: 1,
    title: "Biometrics",
    description: "Academia-backed & in-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection."
  },
  {
    id: 2,
    title: "Image Analysis",
    description: "Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business."
  },
  {
    id: 3,
    title: "Cross-Media Translation",
    description: "Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience."
  },
  {
    id: 4,
    title: "3D Modelling and Design",
    description: "We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single image/video."
  }
];

const Services = () => {
  return (
    <>
    <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 2 , textAlign: 'center'}}>
        Services
        </Typography>
    <Container>
      <Box sx={{ textAlign: 'center', my: 4 }}>
      
        <Typography variant="h3" gutterBottom>
          We provide Artificial Intelligence Services
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} md={6} key={service.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {service.id}. {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
};

export default Services;