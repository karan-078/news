import React from 'react'
import UseFetch from './UseFetch'
import Follwe from './Follwe'
import  './index.css'
import { useState } from 'react'
import { useEffect } from 'react'
const Entry = () => {

    const {loading,data} = UseFetch()
    const [page, setPage ]= useState(0);
    const [follower, setFollwers]=
     useState([])
    console.log(data)
    useEffect(()=>{
         if(loading)return
        setFollwers(data[page])
        
    },[loading,page])

    const handlChange = (index)=>{
     setPage(index)
    }

    const nextPage = ()=>{
        setPage((oldPage)=>{
        let nextPage = oldPage+1;

        if(nextPage>data.length-1){
            nextPage=0
        }
        return nextPage
        })
    }


    const prvePage = ()=>{
        setPage((oldPage)=>{
        let prvepage = oldPage-1;

        if(prvepage<0){
            prvepage= data.length-1;
        }
        return prvepage;
        })
    }
 return (
<>
<main className='section-titel'>
    <h1>{loading?'loading...': 'pagination'}</h1>
    <div className="underline"></div>
    <div>
        <section className="follower">
            <div className="container">
                {follower.map((follwer)=>{
                 return <Follwe key={follwer.id} {...follwer}></Follwe>
                })}
            </div>
         
         {!loading && (<div className="btn-container">
            
            <button className=' btn1 prve-btn' onClick={prvePage}>Prve</button>
           
            
            {
            data.map((_,index)=>{
            return <button key={index} className={`page-btn ${index===page?'active-class':null}`} onClick={()=>handlChange(index)}>
                {index+1}
            </button> 
            })
         }
          <button className='btn1 next-btn' onClick={nextPage}>Next</button>
         </div>)}
       </section>
    </div>
</main>
</>
  )
}

export default Entry
