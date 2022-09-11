import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useGlobalContext} from './Context'
const Submainu = () => {
      const [colum , setColum] =useState('col-2')
    const {issubmaniuOpen,location,page:{page,links}} = useGlobalContext();
    const container = useRef(null)
    useEffect(()=>{
     setColum('col-2')
   const submenu = container.current;
   const {center,bottom}=location;
   submenu.style.left = `${center}px`
   submenu.style.top =`${bottom}`
   
   
   if(links.length===3){
    setColum ('col-3')
    }

    if(links.length>3){
        setColum ('col-4')
        }
    },[location,links])

  return (
   <aside className={`${issubmaniuOpen?'submenu show' :'Submainu'}`} ref={container}> <h4>{page}</h4>
   
   <div className={`submenu-center ${colum}`}>
    {
        links.map((link,index)=>{
            const {label,url,icon}=link

            return (
                <a key={index} href={url}>{icon} {label}</a>
            )
        })
    }
   </div>
   </aside>
  )
}

export default Submainu

