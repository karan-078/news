
import React, { useState } from 'react'
import data from './data'
import './birthday.css'
const Birthday = () => {

    const [user, setuser] = useState(data)
  return (
 <section className="birthay-list">

<div className='list'><h1>totala birthay in today : <span>{user.length}</span></h1> </div>
    {
      user.map((person)=>{
        const {id,name , age , img}= person

        return (
        <li key={id} className="person-details">
         <img src={img} alt={name} />
        <p> {name}</p>
        <p>age : {age}</p> 
        </li>
        );
      })  
    }

    <button onClick={()=> setuser([])} className="clear">clearlist</button>
 </section>
  )
}

export default Birthday
