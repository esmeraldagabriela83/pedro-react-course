import React, {useState, useEffect} from "react";


import '../App.css';

function AppPedro(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const styleWithProp={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor
  };


  //--------------------------------------------------------
  return (
    <div className="App">
<h1 style={styleWithProp}>function component is : {propText}</h1>
    </div>
  );
}

export default AppPedro;

//-----------------------------------------------------------------------------
