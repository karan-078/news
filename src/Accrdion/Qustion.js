import React, { useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import './Accrdion.css';
const Qustion = ({title, info}) => {

    const [ showinfo , setshowinfo]=useState(false)
  return (
   <div className="qustion">
  

      <div className='data'>
        <li  className='togle'>
    <h4>{title}</h4>
        <button className='btn' onClick={()=>setshowinfo(!showinfo)}>{showinfo?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
        </li> 
        {showinfo && <p>{info}</p>}
        </div>
   </div>
  )
}

export default Qustion
