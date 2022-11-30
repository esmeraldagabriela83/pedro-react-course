import React, {useState, useEffect} from "react";
import '../App.css';


function AppListsPlanetsPedroSolution(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const stylePlanets={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//--------------------------pedro homework ---------display only the gas planet  React Conditional Rendering

//--------------------------pedro homework ---------display only the gas planet  operator ternar if

const planetsSec=[

{name:"Mars" , isGasPlanet:false},
{name:"Earth" , isGasPlanet:false},
{name:"Jupiter" , isGasPlanet:true},
{name:"Venus" , isGasPlanet:false},
{name:"Neptune" , isGasPlanet:true},
{name:"Uranus" , isGasPlanet:true},
{name:"Moon" , isGasPlanet:true},
{name:"Planet1" , isGasPlanet:true},
{name:"Planet2" , isGasPlanet:false},

];

console.log("planetsSec is an arr with objects: " , planetsSec);
console.log("planetsSec.length is : " , planetsSec.length);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


return(

  <section style={stylePlanets}>

    <div className="App">
  <h1 style={stylePlanets}>function component is : {propText}</h1>
    </div>


      <article className="App" style={{border:`1px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

      {planetsSec.map((planet , index) =>{
      //map are o callback function intotdeauna cu return
      return(planet.isGasPlanet && <h1 key={index}>my gas planet is {planet.name}</h1>)

      })}

      </article>



          <article className="App" style={{border:`1px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

{planetsSec.map((planet , index) =>{
      //map are o callback function intotdeauna cu return
    if(planet.isGasPlanet==true){
      return <h1>pedro gas planet is : {planet.name}</h1> ;
    }

})}

          </article>
<p>display no gased planets</p>

          <article className="App" style={{border:`1px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

{planetsSec.map((planet , index) =>{
      //map are o callback function intotdeauna cu return
    if(!planet.isGasPlanet==true){
      return <h1> no gas planet is : {planet.name}</h1> ;
    }

})}

          </article>


</section>

);

}

export default AppListsPlanetsPedroSolution;
