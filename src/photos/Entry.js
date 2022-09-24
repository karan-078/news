import React from 'react'
import Photo from './Photo'
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react'
import { useEffect } from 'react'

// const clientId = ?client_id=
// access key = XhVvhZR5hOEAGdZBw-kBl038LUDVo_SYKh6httKuTxo
const mainUrl ='https://api.unsplash.com/photos/'
const searchUrl ="https://api.unsplash.com/search/photos"
const Entry = () => {
    const [loading , setLoading] =useState(false)
    const [photos , setPhotos] =useState([])

    const fetchImage = async ()=>{
    setLoading(true)
    let url ;
    url = `${mainUrl}?client_id=XhVvhZR5hOEAGdZBw-kBl038LUDVo_SYKh6httKuTxo`
    try{
   const response = await fetch(url)
   const data = await response.json()
   console.log(data)
    }catch(error){
    setLoading(false)
    console.log(error.response)
    }
    }

    useEffect(()=>{
    fetchImage();
    },[])
  return (
    <div>
     <h1>return stock photo</h1>
    </div>
  )
}

export default Entry
