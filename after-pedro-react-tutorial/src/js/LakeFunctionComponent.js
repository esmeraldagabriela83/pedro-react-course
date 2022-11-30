import React, {useState, useEffect} from "react";


import '../App.css';

function LakeFunctionComponent(props){

  //destructurare props
  const {propIndexLake , propNameLake , propColorLake , propImgLake , propColor , propText}=props;

  //-------------------------------------------

  const styleWithPropLake={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };


  //--------------------------------------------------------

return(

  <div className="App">
<h1 style={styleWithPropLake}>function component is : {propText}</h1>


<p>indexLake is {propIndexLake}</p>
<p>nameLake is {propNameLake}</p>


<div style={{
  border:`3px solid ${propColorLake}`,
  margin:"1em",
  padding:"1em",
  width:"50%",
  height:"20em",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundImage:`url(${propImgLake})`
}}>{propNameLake}</div>




  </div>
);

}

export default LakeFunctionComponent;
