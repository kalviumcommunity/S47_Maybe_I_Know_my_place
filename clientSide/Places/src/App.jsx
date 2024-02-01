import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./comoponents/Home"
import Display from './comoponents/Display';


function App() {

  const data = {
    Topic: "Taj Mahal",
    State: "Uttar Pradesh",
    City: "Agra",
    Year_of_build: 1484,
    Description: "This beautiful architecture was build during the time of Shah-Jahan, and is now counted in the wonders of world.",
  }
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/display' element={<Display {...data}/>} />
    </Routes>
  );
}

export default App;
