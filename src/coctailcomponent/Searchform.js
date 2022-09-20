import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useGlobalContext } from '../Context'
const Searchform = () => {
    const {setSearchTerm}= useGlobalContext();
    const searchValue = useRef('')

    useEffect(()=>{
        searchValue.current.focus()
    },[])

    const searchCoctail = ()=>{
        setSearchTerm(searchValue.current.value)
    }

    const handlSubmit =(e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <section className="section-search">
            <form  className="search-form" onSubmit={handlSubmit}>
                <div className="form-control">
                    <label htmlFor="name">search your Favorite Cocktail</label>
                    <input type="text" id='name' ref={searchValue} onChange={searchCoctail}/>
                </div>
            </form>
        </section>
      
    </div>
  )
}

export default Searchform
