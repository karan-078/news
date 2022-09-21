import React from 'react'
import './random.css'
import { useState } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
import { useEffect } from 'react'

const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
const Random = () => {
 const [loading , setLoading] = useState(true);
 const [person , setPerson]= useState(null)
 const [titel , setTitel] = useState('name')
 const [value , setValue]= useState('random person')

const getperson = async ()=>{
    const response = await fetch(url);
    const data = await response.json()
    const person = data.results[0];
    const {phone, email}= person;
   const {large:image} = person.picture;
   const { password } = person.login
const {first, last } = person.name
const {dob:{age}, } = person
const {street:{number,name}} = person.location

const newPerson = {
    image,
    phone,
    street:`${number} ${name}`,

    email,
    password,
    age,
    name: `${first} ${last}`
}

setPerson(newPerson)
setLoading(false)
setTitel('name')
setValue(newPerson.name)
}

useEffect(()=>{
    getperson()
},[]
)
 
 const handleValue = (e)=>{
 if(e.target.classList.contains('icon')){
    const newValue = e.target.dataset.label
    setTitel(newValue)
    setValue(person[newValue])
 }
 }
  return (
    <>
    <main>
      <div className="block bcg-black"> </div>
        <div className="block">
          <div className="container">
            <img src={ (person&& person.image)||defaultImage} alt='random user' className='user-img'/>

            <p className='user-titel'>my{titel}is</p>
            <p className='user-value'>{value}</p>
            <div className="values-list">
                <button className='icon' data-label="name" onMouseOver={ handleValue}><FaUser/></button>
                <button className='icon' data-label="email" onMouseOver={ handleValue}><FaEnvelopeOpen/></button>
                <button className='icon' data-label="age" onMouseOver={ handleValue}><FaCalendarTimes/></button>
                <button className='icon' data-label="strret" onMouseOver={ handleValue}><FaMap/></button>
                <button className='icon' data-label="phone" onMouseOver={ handleValue}><FaPhone/></button>
                <button className='icon' data-label="password" onMouseOver={handleValue}><FaLock/></button>
            </div>

            <button className="btn" type='button' onClick={getperson}>
             {loading?'loaing.....':'random user'}
            </button>
          </div>
        </div>
     
    </main>
    </>
  )
}

export default Random
