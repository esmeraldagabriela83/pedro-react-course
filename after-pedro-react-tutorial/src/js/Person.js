import React, {useState, useEffect} from "react";


import '../App.css';

function Person(props) {

  //destructurare props
  const {propCode , propName , propSurname , propImg , propTel , propColor , propText}=props;

  //-------------------------------------------

  const styleWithPropPerson={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };


  //--------------------------------------------------------
  return (
    <div className="App">
<h1 style={styleWithPropPerson}>function component is : {propText}</h1>


<div style={styleWithPropPerson}>

<p>propCode is : {propCode}</p>
<p>name  is : {propName} {propSurname}</p>
<p>tel is : {propTel}</p>

<div style={{
  border:"3px solid yellowgreen",
  margin:"1em",
  padding:"1em",
  width:"50%",
  height:"20em",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundImage:`${propImg}`
}}>{propCode}</div>

</div>


    </div>
  );
}

export default Person;

//-----------------------------------------------------------------------------
