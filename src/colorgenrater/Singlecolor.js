import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './color.css'
// we can use this rgbtohex function for convert rgb to hex
// import rgbToHex from './util'
const Singlecolor = ({rgb,weight, index, hexColor}) => {
const [alert , setAlert] = useState(false)
 let bcg = rgb.join(',');
//  let hex= rgbToHex(...rgb)
 let hexaValue = `#${hexColor}`


 useEffect(()=>{
  let timeOut = setTimeout(() => {
    setAlert(false)
  }, 3000);

  return () =>{
    clearTimeout(timeOut)
  }
 })
  return (
  <div className={`color ${index>10 && 'color-light'}` } style={{backgroundColor: `rgb(${bcg})`}}  onClick={()=>{
    setAlert(true);
    navigator.clipboard.writeText(hexaValue)
  }}>
  <p className='prcentvalue'>{weight}%</p> 
  <p className='hexvalue'>{hexaValue}</p> 
  {alert && <p className='alert'>copied to clipbored</p>}
  </div>
  )
}

export default Singlecolor
