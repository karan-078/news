import React from 'react'

const Follwe = ({avatar_url,html_url,login}) => {
  return (
    <div className="center">
    <article className='card'>
        <img src={avatar_url}  alt={login} />
        <h2>{login}</h2>

        <a href={html_url} className="btn">view profile</a>
    </article>
    </div>
  )
}

export default Follwe
