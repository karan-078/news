import React from 'react'

const Togle = ({title,date,length,snippet}) => {

  return (
  <article className='post'>
  <h2>{title}</h2>

  <div className="post-info">
    <span>{date}</span>
    <span>{length}min read</span>
  </div>
  <p>{snippet}</p>
  </article>
  );
}

export default Togle;
