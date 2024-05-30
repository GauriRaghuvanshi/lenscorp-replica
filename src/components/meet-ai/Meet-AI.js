import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import video from '../../assets/video.mp4';

const MeetTruAI = () => {
  return (
    <Grid container spacing={4} sx={{ mt: 4 }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h3" component="div">
          Meet Tru-AI
        </Typography>
        <Typography variant="h5" component="div">
          Design. Create. Deploy.
        </Typography>
        <Typography variant="subtitle1" component="div">
          ... the Future of AI | Power to EDIT
        </Typography>
        <Typography variant="body1" component="div" sx={{ mt: 2 }}>
          Based on Your Website & Traffic Trends, Tru-AI Optimizes Your Website.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Learn More
        </Button>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <video
          controls
          style={{
            width: '80%',
            borderRadius: '15px',
          }}
          sx={{ mt: 4, mb: 4, ml: 'auto', mr: 'auto' }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Grid>
    </Grid>
  );
};

export default MeetTruAI;
