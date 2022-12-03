import React, {useState, useEffect} from "react";
import '../App.css';

//cata discord grupa 1 // 13.05.2022


function AppUseEffect(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleUseEffect={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------

const [person, setPerson] = useState(
  {
    name: "Andrei",
    surname: "Mihaila"
   }
);

//---------primul useEffect

useEffect(()=>{
  console.log("------------------did mount din primul useEffect");
  setPerson(
    {
      name: "John",
      surname: "Doe"
     }
  );
  console.log("----------------person is : " , person);
},[]);

//-----------al doilea AppUseEffect

useEffect(()=>{
  console.log("----------------Name changed din al doilea useEffect" , person);
},[person]);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
return(

  <article style={styleUseEffect}>

      <div className="App">
      <h1 style={styleUseEffect}>function component is : {propText}</h1>
      </div>

      <h3 style={{textAlign:"center" , fontWeight:"bold"}}>{person.name} {person.surname}</h3>

   </article>

);



}

export default AppUseEffect;
