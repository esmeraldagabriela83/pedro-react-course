import React, {useState, useEffect} from "react";


import '../App.css';

function AppConditionalRenderingAndBoolean(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const styleWithPropFbOOLEAN={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
  };

  const variableAge=17;
  const isGreen=true;

const handleShowValue=(event) =>{
event.preventDefault();

console.log("isGreen is : " , isGreen);

}

//------------------------------------------------------------------------------

const [isGreenOptional , setIsGreenOptional]=useState(false);

//----------------
const handleChangeOptionalVarBoolean=(event , param) =>{
event.preventDefault();

  console.log("isGreenOptional is : " , isGreenOptional);
  setIsGreenOptional(param);
}

//--------------
const handleChangeOptionalVariableBoolean=(event , param) =>{
event.preventDefault();

  console.log("isGreenOptional is : " , isGreenOptional);
  setIsGreenOptional(param);
}


  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <section className="App" style={styleWithPropFbOOLEAN}>
<h1 style={styleWithPropFbOOLEAN}>function component is : {propText}</h1>

{variableAge >=18 ? <h1>over 18</h1> : <h1>under 18</h1>}

<h1 style={{color:"blue"}}>this title has color</h1>

<h1 style={{color:isGreen ? "MediumSpringGreen" : "tomato"}}>this title has color deppending on boolean variable: isGreen</h1>

{isGreen && <div style={{color:isGreen ? "MediumSpringGreen" : "tomato"}}>
            <p>value of variable isGreen is true</p>
            <button onClick={handleShowValue}>display in console value of isGreen variable</button>
            </div>}




    <article className="App" style={styleWithPropFbOOLEAN}>

<h1 style={{color:isGreenOptional ? "MediumAquaMarine" : "Orange"}}>this title has color deppending on boolean variable: isGreenOptional</h1>

<button onClick={(event) =>handleChangeOptionalVarBoolean(event , true)}>console.log and change color of isGreenOptional variable only once</button>

<button onClick={(event) =>handleChangeOptionalVariableBoolean(event , !isGreenOptional)}>{isGreenOptional ? "green true" : "tomato false"}</button>

    </article>

    </section>
  );
}

export default AppConditionalRenderingAndBoolean;

//-----------------------------------------------------------------------------
