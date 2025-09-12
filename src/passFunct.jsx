const CallFunct = ({Display,name,GetUSer}) => {
// const name ='hani'
  return (
    <div>
      <button onClick={()=>{Display(name)}}> display</button>
      <button onClick={()=>{GetUSer()}}> GetUSer

         

      </button>
    
    </div>
  );
};
export default CallFunct;
