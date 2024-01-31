import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./comoponents/Home"

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
  );
}

export default App;
