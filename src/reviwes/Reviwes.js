import React, { useState } from 'react'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
import people from './data'
import './review.css'
const Reviwes = () => {
   const [index, setindex] = useState(0);
   const {id,name,job,img,text}=people[index]

const Cheknumber= (number)=>{
    if(number>people.length-1)return 0;
     if(number<0) return people.length-1;  
return number;
}

const increase =()=>{
 setindex((index)=>{
  let newindex= index+1;

 return Cheknumber(newindex)
 })
}

const decrease =()=>{
  setindex((index)=>{
    let newindex= index-1;
  
   return Cheknumber(newindex)
   })
}

const ranDomuser=()=>{
let randomnumber = Math.floor(Math.random()*people.length)

if(randomnumber===index){
  randomnumber= index+1

  return setindex( Cheknumber(randomnumber))
}
}

  return (
    <>
    <div className="main-container">
      
      <div className="reviwe-container">
        <div className="image">
            <img src={img} alt={job} />
        </div>
        <div className="job"><p>{name}</p> <p>{job}</p></div>
        <div className="text">{text}</div>
        <div className="icon"><button className='left'onClick={decrease}>
            <FaAngleLeft/>
            </button>
            
            <button className='right'onClick={increase}>
            <FaAngleRight/>
            </button> 
            </div>
        <div className="suprisebtn"></div>
      </div>
     
     <button className='btn' onClick={ranDomuser}>supriseme</button>
    </div>
    </>
  )
}

export default Reviwes
