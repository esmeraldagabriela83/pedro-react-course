import React, {useState, useEffect} from "react";


import '../App.css';

function AppJobPedroHomework(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const styleJob={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor
  };

  //---------------pedro AppJobPedroHomework
  const Job=(props) =>{

return(
  <div style={styleJob}>
  <h1>{props.salary}</h1>
  <h1>{props.position}</h1>
  <h1>{props.company}</h1>
  </div>
);

};


  //--------------------------------------------------------
  return (
    <div className="App">
<p style={styleJob}>function component is : {propText}</p>

<Job salary={90000} position={"Senior SDE"} company={"Amazon"} />
<Job salary={120000} position={"Junior SDE"} company={"Google"} />
<Job salary={10000} position={"Project Manager"} company={"Netflix"} />

    </div>
  );
}

export default AppJobPedroHomework;

//-----------------------------------------------------------------------------
