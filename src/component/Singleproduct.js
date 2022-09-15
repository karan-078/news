import { Link,useParams } from "react-router-dom";
import data from "./data";
const Singleproduct = () => {

  const {productId}= useParams();

  const product = data.find((product)=>{
   return product.id===productId
 
  })
  const {image ,name} = product
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <Link to={"/product"}>back to more</Link>
    </div>
  )
}

export default Singleproduct;
