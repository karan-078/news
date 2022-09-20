import React from 'react'
import { Outlet } from 'react-router-dom'
 import Header from '../coctailpage/Header'


const Navbar = () => {
  return (
<div className="nav-center">
    <Header/>
    <Outlet/>
</div>
  )
}

export default Navbar

