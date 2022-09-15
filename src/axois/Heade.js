import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const url = 'https://icanhazdadjoke.com/'
const Heade = () => {
 const [joke , setJoke]= useState('random joke')

 const FetchData =async()=>{
    try {
    const {data} = await axios(url,{
       headers:{
       Accept: "application/json"
       } 
    })
  setJoke(data.joke)
}catch(error){
    console.log(error.response)
}
 }
  return (
    <>
    <div>
      <button onClick={FetchData}>random</button>
    </div>

    <div className="joke">{joke}</div>
    </>
  )
}

export default Heade
