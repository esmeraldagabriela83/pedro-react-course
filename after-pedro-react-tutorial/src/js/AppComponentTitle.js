import React, {useState, useEffect} from "react";
import '../App.css';



function AppComponentTitle(props){


  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleComponentTitle={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------

const [clicks,setClicks] = useState(1);
 //echivalent componentDidMount
 //useEffect(functie, []) - array gol ca al doilea parametru
 useEffect(()=>{
   console.log("did mount")
   document.title = `pedro app ${clicks} clicks`;
 },[]);

 const handleClick = (e) =>{
   setClicks(clicks + 1);
 }
 //echivalent componentDidUpdate
 //useEffect(functie, [stateVar]) - array care contine variabilele de state monitorizate
 useEffect(()=>{
   console.log("clicks did update");
   document.title = `pedro app ${clicks} clicks`;
   //nu am voie sa-l modific pe clicks aici
   //nu am voie sa apelez setClicks!!!
 },[clicks])


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={styleComponentTitle}>

      <div className="App">
    <h1 style={styleComponentTitle}>function component is : {propText}</h1>
      </div>

<button onClick={handleClick}>click to increase font size of paragraph and nr of clicks</button>

      <p style={{cursor:"pointer",fontSize:`${clicks * 1.2}rem`}} >{clicks} clicks</p>


    </article>

);



}

export default AppComponentTitle;
