import React from 'react';
import { Box, Typography, Button, Avatar, Container, Grid } from '@mui/material';
import img from '../../assets/aboutLatest.webp'

const AboutUs = () => {
  return (
    <>
 
    <Typography variant="h2" gutterBottom sx={{ mt: 6, mb: 8, textAlign: 'center'}} >
        About Us
  </Typography>
    <Container sx={{ mt: 4 }} >
      <Box sx={{ mt: 4 ,  backgroundColor: '#f5f5f5' }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Welcome To LENS
            </Typography>
            <Typography variant="body1" paragraph sx={{ mt: 2,ml: 2 }}>
              We put our hearts, souls and sweat into designing and developing custom AI-powered solutions for your business so you don’t have to.
            </Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
              Learn More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
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
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
  );
};

export default AboutUs;