import React, {useState, useEffect} from "react";


import '../App.css';

function AppTernaryOperators(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const styleWithPropIfStatement={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor
  };

  //---------------------------------------------------------------------------

const exAge=15;

if(exAge >= 18){
  console.log("is over exAge");
}else{
    console.log("is under exAge");
}



  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="App">
<h1 style={styleWithPropIfStatement}>function component is : {propText}</h1>
    </div>
  );
}

export default AppTernaryOperators;

//-----------------------------------------------------------------------------
