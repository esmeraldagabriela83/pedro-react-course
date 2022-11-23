import React, {useState, useEffect} from "react";

import '../App.css';

function AppConditionalRenderingJSXexNrSec(props){

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const exNrSec=25;

return(

exNrSec >= 30 ? <h1 style={{color:"deeppink"}}>over or 30</h1> : <h1 style={{color:"green"}}>under 30</h1>

);

}

export default AppConditionalRenderingJSXexNrSec;
