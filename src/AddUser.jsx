import { useState } from "react";
function AddUser({Adduser,setAdduser}){
    // const [Adduser, setAdduser] = useState()
    return(<div>

        <h1>Lifting Up State :{Adduser}</h1>
        <input type="text" onChange={(e)=>setAdduser(e.target.value)} placeholder="name" />
        <hr />
    </div>
    )
}
export default AddUser