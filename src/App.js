import React from 'react'
import './App.css'
// import pages
import About from '../src/coctailpage/About'
import Home from '../src/coctailpage/Home'
import Error from '../src/coctailpage/Error'
// import Singlecoktail from '../src/coctailpage/Singlecoktail'

// import components

import Navbar from '../src/coctailcomponent/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Singlecoktail from './coctailpage/Singlecoktail'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navbar/>}>
     <Route index element = {<Home/>}/>
     <Route path='about' element = {<About/>}/>
     <Route path='cocktail/:id' element = {<Singlecoktail/>}/>
     <Route path= "*" element = {<Error/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
