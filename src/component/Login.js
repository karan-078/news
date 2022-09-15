import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
const Login = ({setUser}) => {
    const [name , setname]= useState('')
     
    const nevigate= useNavigate()

    const handSubmit = async (e)=>{
        e.preventDefault();
    if(!name) return ;

    setUser({name:name,})
    nevigate("/dashbord")
    
    }
  return (
   <section>
    <form onSubmit={handSubmit}>
        <input type="text" className="form-input" id="name" value={name} onChange={(e)=> setname(e.target.value)}/>

   <button type="submit">login</button>
    </form>
   </section>
  )
}

export default Login
