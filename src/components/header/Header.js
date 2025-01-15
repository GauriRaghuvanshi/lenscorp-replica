import React, { useContext, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../assets/nav_logo.webp';
import { ThemeContext } from '../../theme/ThemeContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../theme/theme.css'; // Ensure this path is correct

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log('Dark Mode:', darkMode); // Add this line
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <Navbar bg={darkMode ? "dark" : "light"} expand="lg" variant={darkMode ? "dark" : "light"}>
      <Navbar.Brand href="/" style={{ marginLeft: '80px' }}>
        <img src={logo} alt="LensCorp Logo" style={{ height: '60px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <LinkContainer to="/makemyweb">
            <Nav.Link style={{ marginRight: '10px' }}>MakeMyWeb</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
            <Nav.Link style={{ marginRight: '10px' }}>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/company">
            <Nav.Link style={{ marginRight: '10px' }}>Company</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blogs">
            <Nav.Link>Blogs</Nav.Link>
          </LinkContainer>
        </Nav>
        <Button variant="outline-secondary" onClick={toggleTheme} style={{ marginRight: '50px' }}>
          <i className={darkMode ? "bi bi-brightness-high" : "bi bi-moon"}></i>
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
