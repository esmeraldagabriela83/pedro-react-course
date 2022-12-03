import React, {useState, useEffect} from "react";
import TextPedro2 from "./TextPedro2.js";
import '../App.css';

//components lifecycle mounting / updating / unmounting






function AppShowTextPedro2(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleShowText2={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------



const [showText , setShowText] = useState(false) ;




//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={styleShowText2}>

      <div className="App">
    <h1 style={styleShowText2}>function component is : {propText}</h1>
      </div>

<button onClick={() => {setShowText(!showText)}}>2 Show text pedro</button>

{showText && <TextPedro2   propColor={"tomato"} propNr={700} propText={"TextPedro2"} />}

</article>

);



}

export default AppShowTextPedro2;
