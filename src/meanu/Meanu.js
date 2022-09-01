import React from 'react'
import './meanu.css'
const Meanu = ({item}) => {
  return (
   <div className="meanu-container">

   {item.map(meanu=>{
    const {id,title,category,price,img,desc}= meanu

    return(
    // <div className="continar">
        <div className="info" key={id}>
          <div className="image-container">
         <img src={img} alt={title} />
         </div>
         <div className="price">
         <p>{title}</p>
         <p>{price}</p>
         </div>
         <div className="descrptioon">
         <p>{desc}</p>
         </div>
        </div>
    // </div>
    )
   })}

   </div>
  )
}

export default Meanu
