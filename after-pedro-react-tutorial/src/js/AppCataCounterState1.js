import React, {useState, useEffect} from "react";
import '../App.css';


function AppCataCounterState1(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleCounter1Cata={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------
  const [cntr,setCntr] = useState(0);


//---------

const handleCount=(event , val) =>{
  event.preventDefault();

  console.log(`you clicked btn to add the val: ${val} parameter to countPedro`);
setCntr( val != 0 ? cntr + val : 0 );
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={styleCounter1Cata}>

      <div className="App">
    <h1 style={styleCounter1Cata}>function component is : {propText}</h1>
    <p>13.05.2022 discord gr 1 with intiger variable in state and parameter passing</p>
      </div>


    <h2>Click count {cntr}</h2>

<button onClick={(event) =>handleCount(event , 1)}>+</button>
<button onClick={(event) =>handleCount(event , -1)}>-</button>
<button onClick={(event) =>handleCount(event , 0)}>set to 0</button>


  </article>

);


}

export default AppCataCounterState1;
