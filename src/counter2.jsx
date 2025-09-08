import { useEffect } from "react";

const Counter = ({ counter, deal, Display }) => {
  function Handledeal(params) {
    console.log(deal);
  }

  useEffect(() => {
    Handledeal();
  }, [deal]);

  useEffect(() => {
    return () => {
      console.log(Display);
    };
  }, []);

  return (
    <>
      <h1>hello</h1>
      <h1>learning use Effect</h1>
    </>
  );
};
export default Counter;
