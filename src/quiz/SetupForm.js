import React from 'react'
import { useGlobalContext } from './context'
import Loading from './Loading';
const SetupForm = () => {

const {wating, loading, qustion, index, correct,} = useGlobalContext();

if(wating){
    return <SetupForm/>
}

if(loading){
    return <Loading/>
}
  return (
    <main>
        quiz app
    </main>
  )
}

export default SetupForm
