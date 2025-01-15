// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './theme/ThemeContext';
import './theme/theme.css';

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
