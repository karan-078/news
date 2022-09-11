import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './Context'
const Navbar = () => {
    
    const {openSidebar,opensubmaniu,closesubmaniu} = useGlobalContext();


    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        opensubmaniu(page, { center, bottom });
      };

      const handlSubmit =(e)=>{


        if(!e.target.classList.contains('link-btn')){
        closesubmaniu()}
      }
  return (
    <nav className="nav" onMouseOver={handlSubmit}>
  <div className="nav-center">
    <div className="nav-header"> 
     <h1>Strip</h1>

    <button className='btn toggle-btn'onClick={openSidebar}><FaBars/></button>
    </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
                products
            </button></li>

            <li> <button className="link-btn" onMouseOver={displaySubmenu}>
            developers
            </button></li>

            <li><button className="link-btn" onMouseOver={displaySubmenu}>
            company
            </button>
          </li>
        </ul>
  
  <button className='btn signin-btn'>signin</button>
  </div>
  </nav>
  )
}

export default Navbar
