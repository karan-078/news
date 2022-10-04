import React from 'react'
import { useGlobalContext } from './context'
const Button = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()
   
  // console.log(nbPages)
  return (
   <div className="btn_container">
    <button disabled={isLoading} onClick={()=> handlePage('dec')
    }>prve</button>

<p>
 {page+1} of {nbPages}
</p>
<button disabled={isLoading} onClick={()=> handlePage('inc')
    }>next</button>
    
   </div>
  )
}

export default Button
