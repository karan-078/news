import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
   <section className="error-page-section">
    <div className="error-container">
   
    </div>
    <button> <NavLink to='/' className={'btn btn btn-primary'}>backtohome</NavLink></button>

   </section>
  )
}

export default Error
