import React from 'react'
import useFetch from './useFetch';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams,Link } from 'react-router-dom'
import { API_ENDPOINT } from './Contex'
const Singlemovie = () => {

    const {id} = useParams();
    const { loading, error, data:movie } = useFetch(`&i=${id}`);

    if(loading){
        return <div className="loading"></div>
    }

    if(error.show)
    {
        return <div className="page-error">
            <h1>{error.msg}</h1>

            <Link to='/' className='btn'>
                back
            </Link>
        </div>
    }

    const {Poster:poster,Title:title, Year:year, Plot:plot} = movie
  return (
    <section className="singl-page">
        <img src={poster} alt={title} />

        <div className="singlpage-info">
            <h2>{title}</h2>
            <p>{plot}</p>
            <h4>{year}</h4>

            
            <Link to='/' className='btn'>
                back
            </Link>
        </div>
    </section>
  )
}

export default Singlemovie
