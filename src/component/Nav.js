import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
const Nav = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   </>
  )
}

export default Nav;
