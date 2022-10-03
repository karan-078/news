import React from 'react'
import { useGlobalContext } from './Contex'
const SearchForm = () => {
    const {Queary,setQueary, error} = useGlobalContext();
  return (
    <form className='onsubmit' onSubmit={(e)=>e.preventDefault()}>
        <h4>search movies</h4>
        <input type="text" value={Queary} className="form_input" onChange={(e)=> setQueary(e.target.value)}/>

        {error.show && <div className='error'>{error.msg}</div>}
    </form>
  )
}

export default SearchForm
