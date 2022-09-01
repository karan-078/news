import React from 'react'
import './meanu.css'
const Catageroy = ({ catageroy,fliterItems}) => {
  return (
    <>
    <div className='btn-container'>
      {
        catageroy.map((catageroy,index)=>{
          return (
            <button className='fliter-btn' key={index} type="button" onClick={()=>{fliterItems(catageroy)}} >{catageroy}</button>
          )
        })
      }
</div>
</>
  )
}

export default Catageroy
