import React from 'react'
import Singlecolor from './Singlecolor'
import './color.css'
import Values from 'values.js'
import { useState } from 'react'
const Color = () => {
    const [color ,setColor]= useState('');
    const [error, SetError] = useState(false)
    const [list , setList ]= useState([])


    const handLSubmit = (e)=>{
        e.preventDefault()
    }
  return (
  <>
  <section className="container">
    <h3>Color genrater</h3>
    <form  onSubmit={handLSubmit}>

        <input type="text" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
    </form>
  </section>
  </>
  )
}

export default Color
