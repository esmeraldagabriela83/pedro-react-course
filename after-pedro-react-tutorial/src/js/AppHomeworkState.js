import React, {useState, useEffect} from "react";
import '../App.css';


function AppHomeworkState(props){


  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleHomeworkState={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------

const [count , setCount]=useState(0) ;

//I apply on btn an anonymous inline function that will change the state

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={styleHomeworkState}>

      <div className="App">
    <h1 style={styleHomeworkState}>function component is : {propText}</h1>
      </div>

      <div className="App">

      <button onClick={() =>{setCount(count + 1)}}>increase</button>
      <button onClick={() =>{setCount(count - 1)}}>decrase</button>
      <button onClick={() =>{setCount( 0 )}}>set to 0</button>

<h1>my try // counter is : {count}</h1>

      </div>



   </article>


);

}

export default AppHomeworkState;
