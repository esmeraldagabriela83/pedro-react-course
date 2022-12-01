import React, {useState, useEffect} from "react";
import '../App.css';


function AppChangeColorPedro(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleChangeColor={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------

const [textColor , setTextColor]=useState("green");

//I apply on btn an anonymous inline function that will change the state

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={styleChangeColor}>

      <div className="App">
    <h1 style={styleChangeColor}>function component is : {propText}</h1>
      </div>


<button onClick={() => {setTextColor("red")}}>change title color only once</button>

<button onClick={() => {setTextColor(textColor === "green" ? "red" : "green")}}>change title color</button>

<h1 style={{color:textColor}}>my title has {textColor} color</h1>

</article>

);


}


export default AppChangeColorPedro;
