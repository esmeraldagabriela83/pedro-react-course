import React, {useState, useEffect} from "react";
import '../App.css';


function AppListsAfterPedroPlanets(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleWithPropListPLanets={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//--------------------------pedro homework ---------display only the gas planet

const planets=[

{name:"Mars" , isGasPlanet:false},
{name:"Earth" , isGasPlanet:false},
{name:"Jupiter" , isGasPlanet:true},
{name:"Venus" , isGasPlanet:false},
{name:"Neptune" , isGasPlanet:true},
{name:"Uranus" , isGasPlanet:true},
{name:"Moon" , isGasPlanet:true},

];

console.log("planets is an arr with objects: " , planets);
console.log("planets.length is : " , planets.length);


const resultGasPlanets=planets.filter(checkGasPlanetCallBackFunction);

function checkGasPlanetCallBackFunction(objPLanet){

if(objPLanet.isGasPlanet == true){

return objPLanet;

}

}

console.log("resultGasPlanets is an array :" , resultGasPlanets);
console.log("resultGasPlanets.length :" , resultGasPlanets.length);

  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return(

    <section style={styleWithPropListPLanets}>

      <div className="App">
    <h1 style={styleWithPropListPLanets}>function component is : {propText}</h1>
      </div>

<p>my solution with filter on planets arr</p>

{resultGasPlanets.map((gasPlanetObj , index) =>{
//map are o callback function intotdeauna cu return

return(
  <h3>gas planet is : {gasPlanetObj.name}</h3>
);

})}



      </section>

  );


}

export default AppListsAfterPedroPlanets;
