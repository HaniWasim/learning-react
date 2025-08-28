import { useState } from "react";
// import User from "./userComp";
import UserProps from "./prop";
// import College from "./college";
import Students from "./college";
import Wrap from "./wrapper";

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

// function App(params) {
//  const [Display, setDisplay] = useState(true)
// return(
// <div>
//   <button onClick={()=>setDisplay(!Display)} >toggle</button>
// {/* {
//   Display? <h1>its true </h1>: null
// }  */}

// {
//   Display? <User/>: null
// }
// </div>
// )
// }
//  export default App;

// function App(params) {
//  const [Number, setNumber] = useState(0)
//  return(
//   <div>
//     <h1>{Number}</h1>
//     <button onClick={()=>setNumber(Number+1)}>Counter</button>
//     {
//       Number==0?<h1>Counter is 0 </h1>
//       :Number==1?<h1>Counter is 1 </h1>
//       :Number==2?<h1>Counter is 2 </h1>
//       :Number==3?<h1>Counter is 3 </h1>
//       :Number>=4?<h1>Counter is greater than 3 </h1>:null
//     }
//   </div>
//  )
// }
// export default App;

// function App(params) {
//   let username="hani khan";
//   let age = 18;
//   let Email="hani@mail.com"
// return(
//   // <UserProps name="Hani WASIM" age={18} Email="hani@mail.com"/>
//   <UserProps name={username} age={age} Email={Email}/>

// )
// }
// export default App;

// function App(params) {
//   let userobj={
//      username:"hani khan",
//    age : 18,
//    Email:"hani@mail.com"
//   }
//   return(
//     <UserProps Userobject={userobj}/>
//   )
// }
// export default App;

// function App(params) {
//   let collNames =['adamjee','dj','ned']
//   return(
//     < College colNames={collNames}/>
//   )
// }
// export default App;

// function StdName(params) {
//   const [Student, setStudent] = useState("hamza")
//   // let Student="hamza"
//   return(
//     <div>
//       <h1>hello </h1>
//      <Students name={Student}/>
//      <button onClick={()=>setStudent("Hani")} >upload student name </button>
//     </div>
//   )
// }
// export default StdName;
function App(params) {
  return (
    <div>

    <Wrap color="pink">
      <h3>Learning wrapping</h3>

    </Wrap>
        <Wrap>
      <h3>Learning wrapping</h3>
      
    </Wrap>
        <Wrap>
      <h3>Learning wrapping</h3>
      
    </Wrap>
    </div>
  );
}
export default App;
