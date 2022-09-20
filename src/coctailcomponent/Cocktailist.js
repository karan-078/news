import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../Context'
const Cocktailist = () => {

   const {loading,cocktails}=useGlobalContext()
 
    if(loading){
      return  <Loading/>
    }

    if(cocktails.length<1){
      return (
        <h1 className="section-titel">
          oops no itme match your search list
        </h1>
      )
    }
  return (
    <section className="section">
      <h2 className="section-titel">
        cocktails
      </h2>

      <div className="cocktails-center">
        {cocktails.map((item)=>{
          return <Cocktail key={item.id}{...item}/>
        })}
      </div>
    </section>
  )
}

export default Cocktailist
