import React from 'react'
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import Button from "./Button";
import './index.css'
// import { BrowserRouter, Route, Routes} from 'react-router-dom';


const News = () => {

  return (
    <div>
      <SearchForm/>
      <Button/>
      <Stories/>
    </div>
  )
}

export default News
