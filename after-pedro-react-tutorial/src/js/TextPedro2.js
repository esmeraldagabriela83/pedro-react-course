import React, {useState, useEffect} from "react";
import '../App.css';

//ex asemanator cu InteractiveDiv discord gr 1 / 20052022

function TextPedro2(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleText2={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------



const [text , setText] = useState('') ;


useEffect(() => {

console.log("COMPONENT MOUNTED");
console.log("text is : " , text);

return () =>{
  console.log("COMPONENT unMOUNTED");
}


} , [text]);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={styleText2}>

      <div className="App">
    <h1 style={styleText2}>function component is : {propText}</h1>
      </div>

      <h3>2 What is Lorem Ipsum?</h3>

<img src="https://images.pexels.com/photos/3695401/pexels-photo-3695401.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="text-img" style={{width:'50%' , border:`1px solid ${propColor}`}}/>

<p>
2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
</p>

<label>Your text <br></br>
<input type="text" name="userText" id="userText" placeholder="write a string" onChange={(event) => setText(event.target.value)}/>
</label>

<h1 style={{textAlign:"center"}}>text is : {text}</h1>

</article>

);



}

export default TextPedro2;
