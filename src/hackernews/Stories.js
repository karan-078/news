import React from 'react'
import './index.css'
import { useGlobalContext } from './context'
const Stories = () => {
    const {isLoading} = useGlobalContext();

    if(isLoading){
    return <div className="container">
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
    <div className="block"></div>
  </div>
    }
  return (
    <div>
      <h1>hello i am store</h1>
    </div>
  )
}

export default Stories

