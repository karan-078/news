import { useNavigate } from "react-router-dom"
const About = () => {

  const nevigate = useNavigate();

  const gotocontact=()=>{
    nevigate('/contact')
  }
  const goback=()=>{
    nevigate(-1)
  }
  return (
   <>
   <h1>hey hello i am About component</h1>

   <button onClick={()=>gotocontact()}>contact</button>
   <button onClick={()=>goback()}>back</button>
   </>
  )
}

export default About
