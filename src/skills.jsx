import { useState } from "react";
import ReuseLoop from "./ReuseComp";

// function Skills(params) {
//     const [Skill, setSkill] = useState([])

//     function HAndleSkill(event) {
//         console.log(event.target.value,event.target.checked)
//         if (event.target.checked) {
//                 setSkill([...Skill,event.target.value])
//         } else {
//                 setSkill([...Skill.filter((item)=>item!=event.target.value)])

//         }
//     }

//     return(
//         <div>

//         <input onChange={HAndleSkill} type="checkbox" name="" id="PHP" value="php" />
//         <label style={{margin:"20px"   }} htmlFor="PHP">PHP</label>
// <br />
// <br />
//         <input onChange={HAndleSkill} type="checkbox" name="" id="java" value="java" />
//         <label style={{margin:"20px"   }} htmlFor="java">java</label>
// <br />
// <br />

//         <input onChange={HAndleSkill} type="checkbox" name="" id="node" value="node" />
//         <label style={{margin:"20px"   }} htmlFor="node">node</label>
// <br />
// <br />

//         <input onChange={HAndleSkill} type="checkbox" name="" id="js" value="js" />
//         <label style={{margin:"20px"   }} htmlFor="js">js</label>

// <h1>{Skill.toString()}</h1>
//         </div>
//     )
// }
// export default Skills;

// function Radiobox(params) {
//   const [Gender, setGender] = useState("male");
//   const [City, setCity] = useState("")
//   return (
//         <>
//     <div>
//       <h1>select Gender : {Gender}</h1>
//       <input
//         checked={Gender == "male"}
//         value="Male"
//         onChange={(e) => {
//                 setGender(e.target.value);
//         }}
//         type="radio"
//         name="gender"
//         id="Male"
//         />
//       <label htmlFor="Male">Male</label>
//       <input
//         checked={Gender == "Female"}
//         value="Female"
//         onChange={(e) => {
//                 setGender(e.target.value);
//         }}
//         type="radio"
//         name="gender"
//         id="Female"
//         />
//       <label htmlFor="Female">Female</label>
//     </div>
//     <div>
//         <h1>Select ur city : {City}</h1>
//         <select onChange={(e)=>{setCity(e.target.value)}} name="" id="" defaultValue={"Lahore"}>
//                 <option value="Karachi">Karachi</option>
//                 <option value="Lahore">Lahore</option>
//                 <option value="Islambad">Islambad</option>
//                 <option value="kashmor">kashmor</option>

//         </select>
//     </div>
//         </>
//   );
// }
// export default Radiobox;

function Tableloop(params) {
  const userData = [
    {
      name: "hani",
      Age: "18",
      Gender: "male",
      Id:"1"
    },
    {
      name: "khan",
      Age: "18",
      Gender: "male",
      Id:"2"
    },
    {
      name: "sara",
      Age: "18",
      Gender: "Female",
      Id:"3"
    },
    {
      name: "Amir",
      Age: "40",
      Gender: "male",
      Id:"4"
    },
  ];
  return (
    <div>
      <h1>Reusing components with loops</h1>
      {userData.map((items) => (
        <div key={items.Id}>

                <ReuseLoop user={items} />
        </div>
      ))}

      {/* <table border="1">
                        <thead>
                                <tr>
                                        <td>Name</td>
                                        <td>Age</td>
                                        <td>Gender</td>
                                </tr>
                        </thead>
                      <tbody>
                        {
                                userData.map((user)=>(
                                         <tr>
                                        <td>{user.name}</td>
                                        <td>{user.Age}</td>
                                        <td>{user.Gender}</td>
                                </tr>
                                ))
                        }
                      </tbody>
                </table> */}
    </div>
  );
}

export default Tableloop;
