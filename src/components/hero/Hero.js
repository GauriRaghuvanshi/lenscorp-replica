import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(to right, #f8fafc, #e0f7fa)',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        We are at the 
        forefront of AI
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        From Conserving Wildlife to Automatically Generating Caricatures - <b>We Do It All</b>
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Learn More
      </Button>
    </Box>
  );
};

export default Hero;
