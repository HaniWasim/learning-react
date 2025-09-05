import {useEffect } from "react";


const Counter  =({counter , deal})=>{

  function Handledeal(params) {
console.log(deal)  
}
useEffect(() => {
  
  Handledeal();
}, [deal,])

    return(
<h1>hello</h1>
    )
}
export default Counter