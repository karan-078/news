import React,{useContext} from 'react'
import { FaBars } from 'react-icons/fa'
import './index.css';
import { AppContext,useGlobalContext } from './Contex'
const Home = () => {

    const {openSidebar,  openModel} = useGlobalContext()
  
  return (
  <main>
    <button className='sidebar-toggle' onClick={openSidebar}><FaBars/></button>

    <button className='btn' onClick={openModel}>showmodal</button>
  </main>
  )
}

export default Home
