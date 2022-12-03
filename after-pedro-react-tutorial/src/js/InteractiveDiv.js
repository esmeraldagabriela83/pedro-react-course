import React, {useState, useEffect} from "react";
import '../App.css';

//cata discord grupa 1 // ex 5 forms day3 20.05.2022

function InteractiveDiv(props){


  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleInteractive={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------
//componenta controlata pt ca este legata de state  , si are event onChange
  const [userValue,setUserValue] = useState(50.45);
//number este value introdus dec mine in locul lui user
const number=100;

//echivalent componentDidMount
  //useEffect(functie, []) - array gol ca al doilea parametru
  
useEffect(() =>{
  console.log("hello from first useEffect , with empty arr , as second parameter");
  console.log("userValue from InteractiveDiv function component : " , userValue);
setUserValue(number)
} ,[]);


useEffect(() =>{
  console.log("did upDate from second useEffect : " ,userValue );
} ,[userValue]);


const handleChange = (event) => {
      setUserValue(event.target.value);
      //citeste ce scrie utilizatorul si se transmite in state lui userValue , la eventul onChange
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={styleInteractive}>

      <div className="App">
    <h1 style={styleInteractive}>function component is : {propText}</h1>
      </div>


      <div id="fragment-parent">

            <label style={{display:"block"}}>write a number in the input interface(body I see on screen-desktop):
            <input type="number" name="number" id="numberOne" value={userValue} onChange={handleChange}  />
            </label>

                    <div id="div-child" style={{border:"3px solid red" ,
                                                margin:"0.5em 0",
                                                height:"150px",
                                                width:parseFloat(userValue)}}></div>

            </div>


    </article>

);



}

export default InteractiveDiv;
