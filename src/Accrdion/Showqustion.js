import React from 'react'
import data from './data'
import Qustion from './Qustion'
const Showqustion = () => {
 
  return (
    <>
<div className="container">


    <section className="info">
      {
        data.map((qus)=>{
        return (
        <Qustion key={qus.id} {...qus}/>
        )
        })
      }
    </section>
</div>


    </>
  )
}

export default Showqustion