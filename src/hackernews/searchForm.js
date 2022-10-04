import React from 'react'
import { useGlobalContext } from './context';
const SearchForm = () => {
  const {query , handlSearch} = useGlobalContext();
  return (
    <form className='form_controal' onSubmit={(e)=> e.preventDefault()}>
      <h2>Search Hacker News</h2>
      <input type="text" className='form_input' value={query}
      onChange={(e)=>handlSearch(e.target.value)} />
    </form>
  )
}

export default SearchForm;
