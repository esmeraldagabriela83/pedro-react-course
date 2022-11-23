import React, {useState, useEffect} from "react";
import AppConditionalRenderingJSXexNr from "./AppConditionalRenderingJSXexNr.js";
import AppConditionalRenderingJSXexNrSec from "./AppConditionalRenderingJSXexNrSec.js";
import AppConditionalRenderingJSXexNrThird from "./AppConditionalRenderingJSXexNrThird.js";
import MoreThan100 from "./MoreThan100.js";
import LessThan100 from "./LessThan100.js";

import '../App.css';

function AppConditionalRenderingJSX(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const styleWithPropConditionalRendering={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`
  };

//-------------


//------------------------



const [userNr , setUserNr]=useState(0);

const handleNrChooseComponent=(event) =>{
  setUserNr(event.target.value);
};

userNr >= 100 ? console.log("///more than 100") : console.log("///less than 100");


  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <section style={styleWithPropConditionalRendering}>

    <div className="App">
<h1 style={styleWithPropConditionalRendering}>function component is : {propText}</h1>

<h1><em>AppConditionalRenderingJSXexNr</em> function component</h1>
<AppConditionalRenderingJSXexNr  propColor={"DeepSkyBlue"} propNr={900} propText={"AppConditionalRenderingJSXexNr"}/>

<h1><em>AppConditionalRenderingJSXexNrSec</em> function component</h1>
<AppConditionalRenderingJSXexNrSec  propColor={"MediumSeaGreen"} propNr={900} propText={"AppConditionalRenderingJSXexNrSec"}/>

<h1><em>AppConditionalRenderingJSXexNrThird</em> function component</h1>
<AppConditionalRenderingJSXexNrThird  propColor={"MediumSeaGreen"} propNr={900} propText={"AppConditionalRenderingJSXexNrThird"}/>

    </div>

        <div className="App">

<label htmlFor="nrUserChoose">if nr is less or more than 100 , different function component will appear<br></br>
<input type="number" id="nrUserChoose" name="nrUserChoose" placeholder="nr to choose function component" style={{width:"100%" , backgroundColor:"yellow"}} onChange={handleNrChooseComponent}/>
</label>

{userNr >= 100 ? <MoreThan100 colorProp={"yellowgreen"} textProp={"MoreThan100"} /> : <LessThan100  colorProp={"tomato"} textProp={"LessThan100"} />}

        </div>


  </section>
);
}

export default AppConditionalRenderingJSX;

//-----------------------------------------------------------------------------
