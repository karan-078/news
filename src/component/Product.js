import { Link } from "react-router-dom"
import data from "./data"
const Product = () => {
  return (
   <section className="section">
    <h2>products</h2>
    <div className="products">
        {
         data.map((item)=>{
            return <article key={item.id}>
               <h1>{item.name}</h1> 
             
            <Link to={`/product/${item.id}`}>more info</Link>

            </article>
         })
        }
    </div>
   </section>
  )
}

export default Product
