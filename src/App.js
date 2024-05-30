import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </>
  );
};

export default App;
