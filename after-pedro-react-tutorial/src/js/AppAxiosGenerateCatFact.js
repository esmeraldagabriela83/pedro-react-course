import React, {useState, useEffect} from "react";
import Axios from "axios";
import '../App.css';

//api:
//https://catfact.ninja/fact


function AppAxiosGenerateCatFact(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleAxiosCat={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };


//---------------------------

const [catFactAxios , setCatAxios]=useState("");




// useEffect(() =>{
//
//   Axios.get("https://catfact.ninja/fact").then((response) =>{
//     console.log("### response is " , response);
//     console.log("### response.data is " , response.data);
//     console.log("### response.data.length is " , response.data.length);
//     console.log("### response.data.fact is : " , response.data.fact);
//
//     setCatAxios(response.data.fact);
//   })
//
// } , []);




const axiosCatFact=(event) =>{

  Axios.get("https://catfact.ninja/fact").then((response) =>{
    console.log("### response is " , response);
    console.log("### response.data is " , response.data);
    console.log("### response.data.length is " , response.data.length);
    console.log("### response.data.fact is : " , response.data.fact);

    setCatAxios(response.data.fact);
  })

}



useEffect(() =>{
  //apel functiei aplicata pe buton
  axiosCatFact();
} , []);



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={styleAxiosCat}>

      <div className="App">
    <h1 style={styleAxiosCat}>function component is : {propText}</h1>
      </div>


<button onClick={axiosCatFact}>generate cat fact</button>

<h3><strong style={{color:"olive"}}>catFactAxios is :  </strong>{catFactAxios}</h3>

   </article>

);



}

export default AppAxiosGenerateCatFact;
