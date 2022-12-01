import React, {useState, useEffect} from "react";
import '../App.css';



function AppShowHidePedro(props){
  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleShowHide={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------

const [showText , setShowText]=useState(true);

//I apply on btn an anonymous inline function that will change the state
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <section style={styleShowHide}>

<article style={styleShowHide}>

    <div className="App">
  <h1 style={styleShowHide}>function component is : {propText}</h1>
    </div>

<button onClick={() => {setShowText(!showText) }}>SHOW / HIDE</button>


{showText === true && <h1>string title</h1>}

</article>

<article style={styleShowHide}>

<button onClick={() =>{alert('Hello from alert')}}>click show alert</button>

</article>


</section>

);



}

export default AppShowHidePedro;
