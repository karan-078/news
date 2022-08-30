import React, { useState } from 'react'
import './tour.css';
import data from './data'
const Tour = () => {
    const [tour , settour] = useState(data)
    const [redMore , setredMore] = useState(false)
    
    const fliteritem = (id)=>{
        const newTour = tour.filter((tour)=>tour.id!==id);
        settour(newTour)
    }

    const refresh = ()=>{
        if(tour.length=0){
          const refreshtour= tour.length-1;
          return refreshtour;
        }
       
    }
  return (
  <div className="main-container">
   {
  tour.map((info)=>{
    const {id , img , descruptioon, price,about} = info

    return (
        <div className="infocontainer" key={id}>
         <div className="image">
            <img src={img} alt={descruptioon} />
         </div>

         <div className="price">
           <h2>{descruptioon}</h2>
           <p>{price}</p>
         </div>

         <div className="about">
            <p>{redMore?about:`${about.substring(0,100)}.......`}
            
            <button onClick={()=>{setredMore(!redMore)}}> {redMore?'...show less': 'read more'}</button>
            </p>
         </div>
         
         <div className='btn'>
          <button className='fliteritem' onClick={()=>fliteritem(id)}>notintrsted</button>
          </div>
        </div>
    );
  })
   }
   <div className="refresh">
   <button onClick={settour(refresh)}>refresh</button>
   </div>
  </div>
  )
}

export default Tour
