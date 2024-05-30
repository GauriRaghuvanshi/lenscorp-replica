import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Brightness4 } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/nav_logo.webp'

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="LensCorp Logo" style={{ height: '60px' }} />
        </Typography>
        <Button color="inherit" component={RouterLink} to="/makemyweb">
          MakeMyWeb
        </Button>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/company">
          Company
        </Button>
        <Button color="inherit" component={RouterLink} to="/blogs">
          Blogs
        </Button>
        <IconButton color="inherit">
          <Brightness4 />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
