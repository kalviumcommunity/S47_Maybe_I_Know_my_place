import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./comoponents/Home"
import Display from './comoponents/Display';


function App() {

 

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/display' element={<Display/>} />
    </Routes>
  );
}

export default App;
