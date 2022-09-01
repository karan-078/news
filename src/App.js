
import './App.css';
import item from './meanu/data'
import Meanu from './meanu/Meanu';
import Catageroy from './meanu/Catageroy';
import { useState } from 'react';

const allCategories = ['all',...new Set(item.map((dish)=>{
  return dish.category;
 }))]
console.log(allCategories)
function App() {

  const [meanu , setmeanu]= useState(item)
  const [catageroy, setcatageory]= useState(allCategories)

  const fliterItems = (category)=>{

    if(category==='all'){
      setmeanu(item)
      return;
    }

  const  newItems = item.filter((desh)=> desh.category===category)
    setmeanu(newItems)
  }
  return (
<>
<div className="main-container">
  <h1 className='title'>
    our meanu
  </h1>
  <div className="undrline"></div>
  <Catageroy catageroy={catageroy} fliterItems={fliterItems}/>
  <Meanu item={meanu}/>
</div>
</>
  );
}

export default App;
