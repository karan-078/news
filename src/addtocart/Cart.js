import React, { useState } from 'react'
import "./Cart.css";
import {IoIosArrowRoundBack} from 'react-icons/io'
 import {HiShoppingCart} from 'react-icons/hi'
// import{VscAdd,VscChromeMinimize} from 'react-icons/vsc'
import data  from './data';
import Item from './Item';
const Cart = () => {

    const[product, setproduct] = useState(data)
  return (
   <>
   <header className='container-shopping'>
    <div className='continue-shoping'>
     <IoIosArrowRoundBack className='myicon'/>
     <h4>continue-shoping</h4>
     </div>
     <div className="shoping-cart">
      <HiShoppingCart className='shpoingbag'/>
      <p>7</p>
     </div>
   </header>

   <section className='main-cartsection'>
    <h1>Shopping Cart</h1>
    <p className='total-items'>
        you have <span className='total-items-count'>7</span>items in shopping cart
    </p>

    <div className="cart-items">
        <div className="cart-items-container">
        
        {
         product.map((currentitem)=>{
            return <Item key={currentitem.id}{...currentitem}/>
         })
        }

        </div>
    </div>

    <div className="cart-total">
        <h1>cart-Totaal : <span>1000₹</span></h1>

        <button>CHEKOUT</button>
    </div>
   </section>
   </>
  )
}

export default Cart
