import React, {useState, useEffect} from "react";

import '../App.css';

function MoreThan100(props){

  //destructurare props
  const {colorProp , textProp}=props;

  //-------------------------------------------



return(

<h1 style={{color:colorProp}}>function component / your nr is : {textProp}</h1>

);

}

export default MoreThan100;
