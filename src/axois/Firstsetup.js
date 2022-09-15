import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const url = "https://course-api.com/react-store-products"

const FetchProduct = async()=>{

  try{
    const response= await axios(url)

   const data = await response.data

  }catch(error){
   console.log(error.response)
  }


}

const Firstsetup = () => {
  useEffect(()=>{
    FetchProduct();
  },[])
  
  return (
  <>
  </>
  )
}

export default Firstsetup
