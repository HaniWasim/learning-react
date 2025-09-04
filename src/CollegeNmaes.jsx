// import ColStd from "./collegecand";

import ColStd from "./collegecand";

function ColNames({ Data }) {
  return (
    <div>
      <h1>Name : {Data.Name}</h1>
      <ul>
        <li>
          <h3>City : {Data.City}</h3>
        </li>
        
          <li>
           <ColStd student={Data.Student}/>
          </li>
        
      </ul>
    </div>
  );
}
export default ColNames;
