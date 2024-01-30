import react from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './comoponents/Home'

function App() {



  <Routes>
    <Route exact path='/' element = { <Home/>} />
  </Routes>
  return (
    <>
    <Home/>
    </>
  )
}

export default App
