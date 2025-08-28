function Wrap({ children , color="blue"}) {
  return (
    <div style={{ color: color, border: "5px solid red", width: "300px" , margin:"20px"}}>
      {children}
      {/* <h1>leraning wrapper</h1> */}
    </div>
  );
}
export default Wrap;
