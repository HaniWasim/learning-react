import {useState} from "react";
import User from "./userComp";
// import Counter from "./counter";

// import Header from "./header"
// import Profile, { Pic, Setting, Userkey } from "./usercomponent"


// function Apple(){
  // return(
    // <div>
    //     < Header/>
    //   <h1>hani </h1>
    //   <Fruit/>
    //   <Color/>
    //   < Profile/>
    //   < Setting/>
    //   < Pic/>
    //   <h3>{Userkey}</h3>
    // </div>
    // )
    // }
    // function Fruit() {
      //   return(
        //     <div>
        //       <h5>apple</h5>
        //     </div>
        //   )
        // }
        // function Color(params) {
          //   return(
            //     <h3>blue</h3>
            //   )
            // }
            // export default Apple
            
            
            
//             import Todo from "./todo";

// function App(params) {
//   return(
//     <div>
//       <Todo/>
//     </div>
//   )
// }

// export default App; 
// 




// function App(params) {
//  function Anime(params) {
//   alert("naruto")
//  } 

//  const Fruit=(name)=>{
//   alert(name);
//  }



//  return(
// <div>
//     <button onClick ={Anime} >Fav Anime</button>
//   <button onClick ={()=>Fruit("Apple")} >FApple </button>
//   <button onClick ={()=>Fruit("banana")} >bnana</button>
// </div>
//  )
// }
// export default App  ;










// function App(params) {
//   const [fruit, setFruit] = useState("Apple")
// // function handleFruit(params) {
// // }
// const handleFruit =()=>{
  
//   setFruit ("banana")

// }
// return(
  
//   <div>
//     <h1>{fruit}</h1>
//     <button onClick={handleFruit}>change the Fruit  </button>
//   <h1>hel00</h1>
// <Counter/>
//   </div>
// )
// }
// export default App










function App(params) {
 const [Display, setDisplay] = useState(true) 
return(
<div>
  <button onClick={()=>setDisplay(!Display)} >toggle</button>
{/* {
  Display? <h1>its true </h1>: null
}  */}

{
  Display? <User/>: null
} 
</div>
)
}
 export default App;