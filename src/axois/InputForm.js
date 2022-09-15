import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import "./style.css"

const url ="https://course-api.com"
const InputForm = () => {
    const [name , setname ]=useState('')
    const [email , setemail ]=useState('')

    const handlsubmit= async(e)=>{
     e.preventDefault();
     try{
     const response = await axios.post(url,{name:name,email:email})

     console.log(response.data)
     }catch(error){
      console.log(error.response)
     }
    }
  return (
  <>
  <section className='secction-ecnter'>
<form className='form-controal' onSubmit={handlsubmit}>
  <label htmlFor="name">entername</label>
  <input type="text" id='name' value={name} name="name" onChange={(e)=>setname(e.target.value)}/>

  <label htmlFor="email">enteremail</label>
  <input type="email" id='email' value={email} ema="email" onChange={(e)=>setemail(e.target.value)}/>

<button type='submit' >
  login
</button>
</form>

  </section>
  </>
  )
}

export default InputForm
