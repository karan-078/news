import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="nav-bar">
    <div className="av-center">
        <NavLink to="/">logo</NavLink>

        <ul className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </div>
</nav>
  )
}

export default Header
