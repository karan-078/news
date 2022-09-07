
import React,{useState} from 'react'
 import Singlecolor from './Singlecolor'
import Values from 'values.js'
import './color.css'
const Color = () => {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list ,setList] = useState( new Values('#d60045').all(10));

  const handlSubmit = (e)=>{
    e.preventDefault();
    try{
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    } catch(error){
      setError(true)
      console.log(error)
     
    }
  }
  return (
    <>
  <section className="container">
    <p className='heading'>choos your favourite color with as </p>
    <form className="form-controal" onSubmit={handlSubmit}>

      <input type="text"
      value={color}
      onChange ={(e)=>setColor(e.target.value)} 
      placeholder='#14535'
      className={`${error?'error':null}`}
      />

      <button className="btn" type='submit'>submit</button>
    </form>
  </section>

  <section className="list">
    <div className="color-container">
      {list.map((color, index)=>{
        console.log(color)
        return (
         
          <Singlecolor key={index} {...color} index={index} hexColor={color.hex}/>
        )
      })}
    </div>
  </section>
</>
  )
}

export default Color
