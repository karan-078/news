import React from 'react'
import {HiOutlineTrash} from 'react-icons/hi'
import{VscAdd,VscChromeMinimize} from 'react-icons/vsc'

const Item = ({id ,titel ,description ,Price , img}) => {
  return (
   <>
          <div className="item-info">
            <div className="product-img">
             <img src= {img} alt="" srcset="" />
            </div>
            <div className="titel">
                <h1>{titel}</h1>
                <p>{description}</p>
            </div>

            <div className="add-minus-quaintaty">
              <VscAdd/>
              <input type="text" />
              <VscChromeMinimize/>
            </div>

            <div className="price-container">
                <h2>{Price}</h2>
            </div>

            <div className="remove-item">
            <HiOutlineTrash/>
            </div>
           </div>
   </>
  )
}

export default Item
