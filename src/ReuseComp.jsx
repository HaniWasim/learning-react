function ReuseLoop({user}) {

    return(
        <div style={{border:"1px,solid,black",margin:"20px",borderRadius:"10px",padding:"10px",width:"200px" }}>

        <h3>Name: <span style={{color:"green"}}>{user.name}</span></h3>
        <h3>Gender: <span  style={{color:"green"}}>{user.Gender}</span></h3>
        <h3>Age: <span style={{color:"green"}}>{user.Age}</span></h3>
        <h3>Id: <span style={{color:"green"}}>{user.Id}</span></h3>
        </div>
    )
}
export default ReuseLoop;
