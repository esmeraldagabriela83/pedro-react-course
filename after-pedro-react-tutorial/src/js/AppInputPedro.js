import React, {useState, useEffect} from "react";
import '../App.css';

function AppInputPedro(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleInputPedro={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------

const [inputVal , setInputVal]=useState("");

const handleInputChange=(event) =>{

console.log("event.target.value is : " , event.target.value);
setInputVal(event.target.value);

}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(


    <section style={styleInputPedro}>

      <div className="App">
    <h1 style={styleInputPedro}>function component is : {propText}</h1>
      </div>

<input type="text" name="userString" id="userString" placeholder="write a string" onChange={handleInputChange}/>


<h1>inputVal is : {inputVal}</h1>

</section>

);




}

export default AppInputPedro;
