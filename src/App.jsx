import { useState, useEffect } from "react";
// import User from "./userComp";
import UserProps from "./prop";
// import College from "./college";
// import Students from "./college";
// import Wrap from "./wrapper";
// // import Skills from "./skills";
// import Radiobox from "./skills";
// import Tableloop from "./skills";
// import Clock from "./Clock";
// import ColNames from "./CollegeNmaes";
// import Counter from "./counter2";
// import "./css/style.css";
// import Userprofile from "./Userprofile";
// import styled from "styled-components";
// import ColStd from "./collegecand";

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

// function App(params) {
//   return (
//     <div>

//     <Wrap color="pink">
//       <h3>Learning wrapping</h3>

//     </Wrap>
//         <Wrap>
//       <h3>Learning wrapping</h3>

//     </Wrap>
//         <Wrap>
//       <h3>Learning wrapping</h3>

//     </Wrap>
//     </div>
//   );
// }
// export default App;

// function InputFunct(params) {

//   const [val, setval] = useState("")

//   const [value, setvalue] = useState("")

//   const [values, setvalues] = useState("")

//   return(
//     <>
//     <div>

//     <h2>Learning input feild</h2>
//     <input value={val} onChange={(event)=>{setval(event.target.value)}} placeholder="enter ur text" type="text"  />
// <h1>{val}</h1>
// <button onClick={()=>{setval("")}}>clear ur text</button>
//     </div>

//   <div>

//     <h2>Learning input feild</h2>
//     <input value={value} onChange={(event)=>{setvalue(event.target.value)}} placeholder="enter ur text" type="text"  />
// <h1>{value}</h1>
// <button onClick={()=>{setvalue("")}}>clear ur text</button>
//     </div>

//       <div>

//     <h2>Learning input feild</h2>
//     <input value={values} onChange={(event)=>{setvalues(event.target.value)}} placeholder="enter ur text" type="text"  />
// <h1>{values}</h1>
// <button onClick={()=>{setvalues("")}}>clear ur text</button>

// <br />

// {/*
// Use console.log(variable) → logs only the value.

// Use console.log({variable}) → logs an object with the variable name as the key. */}

// <button onClick={()=>{console.log(val,value,values)}}> showing on console </button>

//     </div>
//     </>
//   )
// }
// export default InputFunct;

// function App(params) {
//   return(
//     <Skills/>
//   )
// }
// export default App;

// function App(params) {
//   return(
//     <Radiobox/>
//   )
// }
// export default App;

// function App(params) {
//   return(
//     <Tableloop/>
//   )
// }
// export default App;

// function App(params) {
//   const [Color, setColor] = useState("pink")
//   return(
//     <>
//     <select onChange={(e)=>{setColor(e.target.value)}} >
//       <option value="orange">orange</option>
//       <option value="red">red</option>
//       <option value="green">green</option>
//       <option value="pink">pink</option>
//     </select>
//     <Clock color={Color}/>
//     </>
//   )
// }
// export default App;

// function App(params) {
//   const CollegeData = [
//     {
//       Name: "Dj",
//       City: "karachi",
//       Student: [
//         {
//           Name: "hani",
//           Age: "18",
//         },
//         {
//           Name: "Ali",
//           Age: "18",
//         },
//         {
//           Name: "Zahid",
//           Age: "18",
//         },
//       ],
//     },
//     {
//       Name: "iit",
//       City: "islamabad",
//       Student: [
//         {
//           Name: "hani",
//           Age: "18",
//         },
//         {
//           Name: "Ali",
//           Age: "18",
//         },
//         {
//           Name: "Zahid",
//           Age: "18",
//         },
//       ],
//     },
//     {
//       Name: "adamjee",
//       City: "net",
//       Student: [
//         {
//           Name: "hani",
//           Age: "18",
//         },
//         {
//           Name: "Ali",
//           Age: "18",
//         },
//         {
//           Name: "Zahid",
//           Age: "18",
//         },
//       ],
//     },
//     {
//       Name: "ietc",
//       City: "lahore",
//       Student: [
//         {
//           Name: "hani",
//           Age: "18",
//         },
//         {
//           Name: "Ali",
//           Age: "18",
//         },
//         {
//           Name: "Zahid",
//           Age: "18",
//         },
//       ],
//     },
//   ];
//   return (
//     <>
//       <h1>nested loop</h1>
//       {CollegeData.map((data,index) => (
//         <div key={index} style={{backgroundColor:"Grey",borderRadius:"10px",borderBottom:"5px solid black",padding:"10px",margin:"10px"}}>
//         <ColNames Data={data}/>

//         </div>
//       ))}

//     </>
//   );
// }
// export default App;

// function App(params) {
//   const [deal, setdeal] = useState(0);
//   const [counter, setcounter] = useState(0);

//   function Handledeal(params) {
// console.log(deal)
// }
// useEffect(() => {

//   Handledeal();
// }, [deal,counter])

//   return (
//     <>
//       <h1>learning use Effect</h1>
// <button onClick={()=>{setdeal(deal+1)}}> deal{deal}</button>
// <button onClick={()=>{setcounter(counter+1)}}> Counter{counter}</button>

//     </>
//   );
// }
// export default App;

// function App(params) {
//   const [mainstyle, setmainstyle] = useState({
//     width: "200px",
//     border: "1px solid #e4e4e4",
//     borderRadius: "10px",
//     boxShadow: "#ffffff 1px 1px 1px 0px",
//     margin: "10px ",
//   })
//   const [Textcolour, setTextcolor] = useState('')
//   const [Grid, setGrid] = useState(true)
//   function UpdateTheme(bgcolor,Textcolor) {
//     setmainstyle({...mainstyle,backgroundColor:bgcolor})
// setTextcolor(Textcolor)
//   }
//   return (
//     <>
//       <h1 style={{ color: "red" }}>Inline style css</h1>
//       <button onClick={()=>{UpdateTheme('rgb(68 85 107)','rgb(23 27 60)')}}>Change Theme</button>
//       <button onClick={()=>{UpdateTheme('#ffff','black')}}>Default Theme</button>
//       <button onClick={()=>{setGrid(!Grid)}}> Toogle Grid</button>

//       <div style={{ display:Grid?"flex":"block", flexWrap: "wrap" }}>
//         <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>
//           <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>  <div style={mainstyle}>
//           <img
//             style={{ width: "200px", borderRadius: "5px 5px 1px 1px " }}
//             src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//           <div style={{ marginLeft: "10px" ,color:Textcolour}}>
//             <h3>Ali Khan</h3>
//             <h4>Developer</h4>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;

// function App(params) {
//   return (
//     <div>
//       <h1 className="heading">Using External Css</h1>
//       <div className="mainCont">
//         <div className="cont">
//           <div>
//             <img
//               className="img"
//               src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             />
//           </div>
//           <div className="textCont">
//             <h3>Ilyas Khan</h3>
//             <h5>Actor </h5>
//           </div>
//         </div>
//           <div className="cont">
//           <div>
//             <img
//               className="img"
//               src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             />
//           </div>
//           <div className="textCont">
//             <h3>Ilyas Khan</h3>
//             <h5>Actor </h5>
//           </div>
//         </div>  <div className="cont">
//           <div>
//             <img
//               className="img"
//               src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             />
//           </div>
//           <div className="textCont">
//             <h3>Ilyas Khan</h3>
//             <h5>Actor </h5>
//           </div>
//         </div>  <div className="cont">
//           <div>
//             <img
//               className="img"
//               src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             />
//           </div>
//           <div className="textCont">
//             <h3>Ilyas Khan</h3>
//             <h5>Actor </h5>
//           </div>
//         </div>  <div className="cont">
//           <div>
//             <img
//               className="img"
//               src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             />
//           </div>
//           <div className="textCont">
//             <h3>Ilyas Khan</h3>
//             <h5>Actor </h5>
//           </div>
//         </div>  <div className="cont">
//           <div>
//             <img
//               className="img"
//               src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             />
//           </div>
//           <div className="textCont">
//             <h3>Ilyas Khan</h3>
//             <h5>Actor </h5>
//           </div>
//         </div>  <div className="cont">
//           <div>
//             <img
//               className="img"
//               src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             />
//           </div>
//           <div className="textCont">
//             <h3>Ilyas Khan</h3>
//             <h5>Actor </h5>
//           </div>
//         </div>  <div className="cont">
//           <div>
//             <img
//               className="img"
//               src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             />
//           </div>
//           <div className="textCont">
//             <h3>Ilyas Khan</h3>
//             <h5>Actor </h5>
//           </div>
//         </div>  <div className="cont">
//           <div>
//             <img
//               className="img"
//               src="https://images.unsplash.com/photo-1509923261489-fd580b2d9051?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             />
//           </div>
//           <div className="textCont">
//             <h3>Ilyas Khan</h3>
//             <h5>Actor </h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;

// function App(params) {

//   return(
// <div>
//     <Userprofile/>

// </div>
//   )
// }
// export default App;

// function App(params) {
//   const Heading = styled.h2`
//   color:red;
//   border:1px solid black;
//   border-radius:5px;
//   padding:10px;
//   background-color:#ccc
//   `
//   const  StyleBtn =styled.button({
// color:'red',
// width:'130px',
// backgroundColor:'#ccc',
// height:'50px',
// margin:'30px'
//   })
//   return(
//     <div>

//     <h1>hey there !</h1>
//     <Heading>Hani </Heading>
//     <Heading>Hani </Heading>
//     <Heading>Hani </Heading>
//     <Heading>Hani </Heading>
//     <Heading>Hani </Heading>
//   <StyleBtn>Login</StyleBtn>
//   <StyleBtn>Logout</StyleBtn>
//   <StyleBtn>Signin</StyleBtn>
//   <StyleBtn>Singout</StyleBtn>
//     </div>
//   )
// }
// export default App;

// import { Button } from "react-bootstrap";
// import { Alert } from "react-bootstrap";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function App(params) {
//   return (
//     <div>
//       <>

//        <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//       </>
//       <Button>ok</Button>
//     <Alert variant="danger">hani its not over</Alert>
//     </div>
//   );
// }
// export default App;

import { useRef } from "react";
// import CallFunct from "./passFunct";
import ForwardRef from "./forwardRef";

// function App(params) {
//   const InputRef = useRef(null);
//   const h1Ref = useRef(null);

//   // const handleToggle = () => {
//   //   InputRef.current.focus();
//   //   InputRef.current.style.color = "red";
//   //   InputRef.current.placeholder = "Enter ur password";
//   //   InputRef.current.value = "shutup!";
//   // };
//   function handleToggle(params) {
//     console.log(InputRef);
//     if (InputRef.current.style.display != "none") {
//       InputRef.current.style.display = "none";
//     } else {
//       InputRef.current.style.display = "Inline";
//     }
//   }
//   const H1toggle = () => {
//        if (h1Ref.current.style.color != "") {
//      h1Ref.current.style.color = "";
//     } else {
//       h1Ref.current.style.color = "Grey";
//     }
//     // h1Ref.current.style.color = "Grey";
//   };
//   return (
//     <div>
//       <h1 ref={h1Ref}>Hello World </h1>
//       <div>

//       <button onClick={H1toggle}> change heading color </button>
//       </div>
//       <br />
//       <button onClick={handleToggle}>Toggle</button>
//       <input ref={InputRef} placeholder="enter ur text " type="text" />
//     </div>
//   );
// }
// export default App;

// function App(params) {
//   function SubmitDom(event) {
//     event.preventDefault();
//     const user = document.querySelector("#name").value;
//     const pass = document.querySelector("#pass").value;
//     console.log(user, pass);
//   }
//   const inputRef = useRef();
//   const passRef = useRef();

//   function submitRef(event) {
//     event.preventDefault();

//     const user = inputRef.current.value;
//     const pass = passRef.current.value;
//     console.log(user,pass);

//   }
//   return (
//     <div>
//       <h1>Form </h1>
//       <form action="" onSubmit={SubmitDom}>
//         <br />

//         <input id="name" type="text" placeholder="enter  password" />
//         <br />
//         <br />
//         <input id="pass" type="password" placeholder="enter User name" />
//         <br />

//         <button>submit</button>
//       </form>
//       <hr />

//       <h1>Form </h1>
//       <form action="" onSubmit={submitRef}>
//         <br />

//         <input
//           id="nameRef"
//           ref={inputRef}
//           type="text"
//           placeholder="enter User password"
//         />
//         <br />
//         <br />
//         <input
//           id="passRef"
//           ref={passRef}
//           type="password"
//           placeholder="enter User name"
//         />
//         <br />

//         <button>submit</button>
//       </form>
//     </div>
//   );
// }
// export default App;

// function App(params) {
//   const Display = (name) => {
//     alert(name);
//   };
//   const GetUSer=()=>{
//     alert('get user funct called');

//   }
//   return (
//     <div>
//       <h1>Call parent component function through child component</h1>
//       <CallFunct  Display={Display}name='HANI' GetUSer={GetUSer}/>
//       <CallFunct  Display={Display}name='khan' GetUSer={GetUSer}/>
//       <CallFunct  Display={Display}name='Bruce' GetUSer={GetUSer}/>
//       <CallFunct  Display={Display}name='Billi' GetUSer={GetUSer}/>
//     </div>
//   );
// }
// export default App;




// function App(params) {
//   const inputReef = useRef();
//   const handleReef = () => {
//     inputReef.current.value = "ShutUp";
//     inputReef.current.style.color = "red";
//   };
//   return (
//     <div>
//       {/* <input ref={inputReef} type="text" placeholder="enter anything :)" /> */}
//       <ForwardRef ref={inputReef} /> 
//       <button onClick={handleReef}>Magic </button>
//     </div>
//   );
// }
// export default App;




function App(params) {
 
  return(
    <h3>use form status hook</h3>
  )
}
export default App