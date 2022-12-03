import React, {useState, useEffect} from "react";
import TextPedro from "./TextPedro.js";
import '../App.css';

//components lifecycle mounting / updating / unmounting






function AppShowTextPedro(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleShowText={
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

  <article style={styleShowText}>

      <div className="App">
    <h1 style={styleShowText}>function component is : {propText}</h1>
      </div>

<button onClick={() => {setShowText(!showText)}}>Show text pedro</button>

{showText && <TextPedro   propColor={"tomato"} propNr={700} propText={"TextPedro"} />}

</article>

);



}

export default AppShowTextPedro;
