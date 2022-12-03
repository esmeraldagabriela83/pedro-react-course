import React, {useState, useEffect} from "react";
import '../App.css';

//api:
//https://catfact.ninja/fact

function AppGenerateCatFact(props){


  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleText2={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };


const [catFact , setCatFact]=useState("");


// useEffect(() =>{
//
//   //---------------------fetch function returns a promise , a JSON , CARE TREBUIE SCHIMBAT IN js object
//
//   fetch('https://catfact.ninja/fact')
//     .then((response) =>response.json())
//     .then((data) =>{
//       console.log("!!!fetch data is : " , data);
//       console.log("!!!fetch data.fact is : " , data.fact);
//
//       setCatFact(data.fact);
//     });
//
// } , []);

//----------------

const handleCatFact=(event) =>{

  //---------------------fetch function returns a promise , a JSON , CARE TREBUIE SCHIMBAT IN js object

  fetch('https://catfact.ninja/fact')
    .then((response) =>response.json())
    .then((data) =>{
      console.log("!!!fetch data is : " , data);
      console.log("!!!fetch data.fact is : " , data.fact);

      setCatFact(data.fact);
    });

}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={styleText2}>

      <div className="App">
    <h1 style={styleText2}>function component is : {propText}</h1>
      </div>


<button onClick={handleCatFact}>generate cat fact</button>


<p><strong>fact about cats : </strong>{catFact}</p>

    </article>

);



}

export default AppGenerateCatFact;
