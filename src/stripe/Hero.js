import React from 'react'
import {useGlobalContext} from './Context'
import './index.css'
const Hero = () => {

    const {  closesubmaniu} = useGlobalContext();

    // console function for fexing bug
      // console.log(  closesubmaniu)
  return (
    <section className='hero' onMouseOver={  closesubmaniu}>
        <div className="hero-center">
            <article className='hero-info'>
                <h1>Payment intrfascuture for internet</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione ut sint nobis sit, fugiat eius numquam atque dicta fuga.</p>

             <button className='btn'>start now</button>
            </article>

            <article className='hero-image'>
                image
            </article>
        </div>

    </section>
  )
}

export default Hero
