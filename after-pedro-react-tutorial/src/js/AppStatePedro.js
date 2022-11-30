import React, {useState, useEffect} from "react";
import '../App.css';



function AppStatePedro(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleStatePedro={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------
const [ageStateEx , setAgeStateEx]=useState(0);

const increaseAgeStateExFunc=(event) =>{

console.log("you clicked to increase age");
console.log("ageStateEx is : " , ageStateEx);

setAgeStateEx(ageStateEx + 1);

}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <section style={styleStatePedro}>

    <div className="App">
  <h1 style={styleStatePedro}>function component is : {propText}</h1>
    </div>

<h1>conter is : {ageStateEx}</h1>
<button onClick={increaseAgeStateExFunc}>increase ageStateEx by 1</button>



</section>

);

}


export default AppStatePedro;
