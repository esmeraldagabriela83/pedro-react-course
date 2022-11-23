import React, {useState, useEffect} from "react";

import '../App.css';

function AppConditionalRenderingJSXexNr(props){

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const exNr=79;

  if(exNr >= 18){
    console.log("OVER AGE");
    return<h1 className="App" style={{fontFamily:"'Poppins', sans-serif" , color:propColor}}>OVER AGE</h1>;
  }else{
      console.log("UNDER AGE");
    return<h1 className="App">UNDER AGE</h1>;
  }

}

export default AppConditionalRenderingJSXexNr;
