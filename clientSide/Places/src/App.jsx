import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./comoponents/Home"
import Display from './comoponents/Display';
import Users from './comoponents/Users';
import Update from './comoponents/Update';


function App() {



  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/display' element={<Display />} />
      <Route path='/users' element={<Users />} />
      <Route path='/update/:id' element= {<Update/>} />
    </Routes>
  );
}

export default App;
