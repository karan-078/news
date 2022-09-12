import React from 'react'
import './App.css';
import {useGlobalContext} from './cart/Context'
//components
import Navbar from './cart/Navbar';
import Cartcontainer from './cart/Cartcontainer';
//Item
const App = () => {
 const{loading}= useGlobalContext();

//  loading component work  if we are fetch data from api
 if(loading){
  return (
    <div className="loading">
      <h1>Loading....</h1>
    </div>
  )
 }
  return (
<>
<main>
<Navbar/>
<Cartcontainer/>
</main>
</>
  )
}

export default App

