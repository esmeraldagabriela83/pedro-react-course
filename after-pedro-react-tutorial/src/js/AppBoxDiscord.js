import React, {useState, useEffect} from "react";
import '../App.css';

//cata discord grupa 1 // 13.05.2022


function AppBoxDiscord(props){


  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleBox={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------

//echivalent componentDidMount
  //useEffect(functie, []) - array gol ca al doilea parametru

 const [color,setColor] = useState("cornflowerblue");

 const [initialText , setInitialText] = useState("initial text") ;

 const [initialSrc , setInitialSrc] = useState("https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&w=1600") ;

//useEffect are 2 parametri
useEffect(()=>{
  //functia setTimeout are 2 parametri : arrow function si timpul in secunde
  const tmid=setTimeout( () =>{
    setColor("tomato");
    setInitialText("updated text");
    setInitialSrc("https://images.pexels.com/photos/774664/pexels-photo-774664.jpeg?auto=compress&cs=tinysrgb&w=1600");
    console.log("I`ve changed my color , text and img in 3 seconds");
  } , 3000);

} , []) ;



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={styleBox}>

      <div className="App">
    <h1 style={styleBox}>function component is : {propText}</h1>
      </div>


<div style={{width:"200px",height:"100px",backgroundColor:color , fontWeight:"bold"}}>{initialText}</div>

<img src={initialSrc}
     alt="useEffect-img"
     style={{width:'50%' , border:`3px solid ${color}` , padding:"1em" , margin:"1em"}}/>


   </article>

);


}

export default AppBoxDiscord;
