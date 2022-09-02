import React, { useEffect, useState } from 'react'
import './showjob.css';
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project';

const Fetchjob = () => {

    const [loadiing, setloading] = useState(true);
const [jobs , Setjobs] = useState([]);
const [value , setvalue]= useState(0);

const Ftchejobs = async ()=>{
 const response = await fetch(url); 
 const NewJobs  = await response.json();
 Setjobs(NewJobs);
 setloading(false);
}

useEffect(()=>{
 Ftchejobs();
},[])

if(loadiing){
    return(
        <section className="loading">
            <h1>Loading......</h1>
        </section>
    )
};

const {company,dates, duties,titel,}= jobs[value]
  return (
   <section className="section">
    <div className="titel">
        <h2>EXPRIANCE</h2>
    </div>
  <div className="undrline"></div>
   
   <div className="job-center">
    {jobs.map((job,index)=>{
       
    return <button key={job.id} onClick={()=>setvalue(index)} className={`btn ${index===value && 'active-btn'}`}>{job.company}</button>
       
    })}
   </div>
    <div className="job-info">
        <h3>{titel}</h3>
        <h4>{company}</h4>
        <p className="job-dates">{dates}</p>

        {duties.map((duty, index)=>{
            return (
                <div className="class-desk" key={index}>
                    <FaAngleDoubleRight className='job-icon'>
                    </FaAngleDoubleRight>

                    <p>{duty}</p>
                </div>
            )
        })}
    </div>
  
   </section>
  )
}

export default Fetchjob
