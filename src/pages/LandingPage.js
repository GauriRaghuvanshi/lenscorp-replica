import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import MeetTruAI from '../components/meet-ai/Meet-AI';
import WhyChooseLens from '../components/whychooselens/WhyChooseLens';


const features = [
  {
    title: "Exclusive Rights",
    description: "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belong to you."
  },
  {
    title: "Research Driven",
    description: "We regularly benchmark our solutions via comparing industry-wide evaluations so our partners only get the best that AI can offer."
  },
  {
    title: "Plug-and-Play",
    description: "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice."
  },
  {
    title: "Lifetime Support",
    description: "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options."
  }
];

const LandingPage = () => {
  return (
    <Container>
   

      {/* Features Section */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LandingPage;