import { useState } from "react";


function Skills(params) {
    const [Skill, setSkill] = useState([])

    function HAndleSkill(event) {
        console.log(event.target.value,event.target.checked)
        if (event.target.checked) {
                setSkill([...Skill,event.target.value])
        } else {
                setSkill([...Skill.filter((item)=>item!=event.target.value)])
                
        }
    }


    return(
        <div>

        <input onChange={HAndleSkill} type="checkbox" name="" id="PHP" value="php" />
        <label style={{margin:"20px"   }} htmlFor="PHP">PHP</label>
<br />
<br />
        <input onChange={HAndleSkill} type="checkbox" name="" id="java" value="java" />
        <label style={{margin:"20px"   }} htmlFor="java">java</label>
<br />
<br />

        <input onChange={HAndleSkill} type="checkbox" name="" id="node" value="node" />
        <label style={{margin:"20px"   }} htmlFor="node">node</label>
<br />
<br />

        <input onChange={HAndleSkill} type="checkbox" name="" id="js" value="js" />
        <label style={{margin:"20px"   }} htmlFor="js">js</label>

<h1>{Skill.toString()}</h1>
        </div>
    )
}
export default Skills;