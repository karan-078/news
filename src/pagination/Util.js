
const Util = (follower) => {
const ItemPage = 8;
 const Page = Math.ceil( follower.length/ItemPage)

 const newArray = Array.from({length:Page},(_,index)=>{
   const str = index*ItemPage 
return follower.slice(str, str+ItemPage)
 })
return newArray;
}

export default Util
