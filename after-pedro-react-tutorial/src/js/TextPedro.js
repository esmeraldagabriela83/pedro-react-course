import React, {useState, useEffect} from "react";
import '../App.css';


function TextPedro(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleText={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------








//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={styleText}>

      <div className="App">
    <h1 style={styleText}>function component is : {propText}</h1>
      </div>

      <h3>What is Lorem Ipsum?</h3>

<img src="https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="text-img" style={{width:'50%' , border:`1px solid ${propColor}`}}/>

<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
</p>

</article>

);



}

export default TextPedro;
