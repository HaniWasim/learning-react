import { useState,useEffect } from "react";

function Clock({color}) {
  const [Time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [])

  return (
    <>
      <h1>Clock</h1>
      <h3 style={{color:color,backgroundColor:'black', width:"120px"}}>{Time}</h3>
    </>
  )
}
export default Clock;
