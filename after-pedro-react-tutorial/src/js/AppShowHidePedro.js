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

return(

  <section style={styleShowHide}>

    <div className="App">
  <h1 style={styleShowHide}>function component is : {propText}</h1>
    </div>



</section>

);



}

export default AppShowHidePedro;
