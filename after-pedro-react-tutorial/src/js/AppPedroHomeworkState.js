import React, {useState, useEffect} from "react";
import '../App.css';



function AppPedroHomeworkState(props){


    //destructurare props
    const {propColor , propNr , propText}=props;


    const styleHomeworkState={
      padding:"1em",
      margin:"1em",
      border:`1px solid ${propColor}`,
      color:propColor,
      fontFamily:"Arial,Helvetica sans-serif"
    };

  //---------------------
const [countPedro , setCountPedro]=useState(0);

const increaseFunc=(event) =>{
event.preventDefault();

console.log("you clicked btn to increase countPedro");
setCountPedro(countPedro + 1);
}

//------------
const decreaseFunc=(event) =>{
  event.preventDefault();

  console.log("you clicked btn to decrease countPedro");
  setCountPedro(countPedro - 1);
}

//------------------
const setTo0Func=(event) =>{
  event.preventDefault();

  console.log("you clicked btn to decrease countPedro");
  setCountPedro(0);
}





  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


return(

  <article style={styleHomeworkState}>

      <div className="App">
    <h1 style={styleHomeworkState}>function component is : {propText}</h1>
      </div>


<button onClick={increaseFunc}>increase</button>
<button onClick={decreaseFunc}>increase</button>
<button onClick={setTo0Func}>set to 0</button>

<h1>pedro solution Count {countPedro}</h1>

  </article>

);

}


export default AppPedroHomeworkState;
