import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const WhyChooseLens = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 2, textAlign: 'center' }}>
        Why Choose Lens
      </Typography>
      <Container sx={{ mt: 4 , textAlign: 'center'}}>
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h2" gutterBottom>
            AI-driven solutions backed by science
          </Typography>
        </Box>
        
        <Typography variant="body1" component="div" sx={{ mt: 2, textAlign: 'center' }}>
          Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.
        </Typography>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <ul>
              <li>State-of-the-art solutions</li>
              <li>Fast & Efficient</li>
              <li>No extra computation fee</li>
              <li>No licensing fee</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <ul>
              <li>Lifetime support & upgrades</li>
              <li>Plug-and-Play</li>
              <li>24x7 Progress Monitoring</li>
              <li>Incremental Updates</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default WhyChooseLens;