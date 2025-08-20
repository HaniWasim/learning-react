import {useState} from "react";
function Counter(params) {
    const [Count, setCount] = useState(0)
    const [Rcounter, setRcounter] = useState(10)
    function Counting(params) {
        setCount(Count+1);
    }
    return(
<div>
    
        <h1>{Count}</h1>
        <h1>{Rcounter}</h1>
        <button onClick={Counting}>icrease one</button>
        <button onClick={()=>setRcounter(Rcounter-1)}> decreasa by 1</button>
        <div></div>
</div>
    )
}
export default Counter;