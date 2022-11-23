import React, {useState, useEffect} from "react";

import '../App.css';


import lakeArr from "./lake.js";

console.log("lakeArr is : " , lakeArr);
console.log("lakeArr.length is : " , lakeArr.length);



function AppPedro(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  const styleAnything={
    border:`1px solid ${propColor}`,
    margin:"1em",
    padding:"1em",
    color:propColor
  };

  //----------------------------------------------------------


  const nam=<h3>Pedro</h3>;
  const ag=<h3>21</h3>;
  const emal=<h3>pedro@pedro.com</h3>;
  const usr=(<div>{nam} {ag} {emal}</div>);

  //----------------------------------------------------------------------------

//JS function

  const getName=()=>{
    return "Ana are mere";
  };

  //JS function

  const getNameWithParam=(param)=>{
    return `${param} are portocale .`;
  };

  //----------------------------------------------------------------------------

  const arrNames=["Maria" , "Jeni" , "Alexandru" , "Teodosia" , "Pelagia"];

//------------------------------------------------------------------------------

//JS function

  const arrNamesEn=[
    {
      nameObj:"Mary",
      ageObj:55,
      colorObj:"orange"
    },
    {
      nameObj:"John",
      ageObj:67,
      colorObj:"cornflowerblue"
    },
    {
      nameObj:"Alex",
      ageObj:35,
      colorObj:"olive"
    },
  ];

const getNameWithParamAndAge=(param , age , color)=>{
  return `${param} has ${age + 5} years old .`;
};

//--------------


const handleShowPersons=(event) =>{

event.preventDefault();


//-------insert each obj inside each li-----
const allliPersonObj=document.querySelectorAll(".liPersonObj");
console.log("allliPersonObj arr is : " , allliPersonObj);

for(let i=0 ; i<allliPersonObj.length ; i++){

allliPersonObj[i].innerText=getNameWithParamAndAge(arrNamesEn[i].nameObj , arrNamesEn[i].ageObj , arrNamesEn[i].colorObj);
allliPersonObj[i].style.padding="1em";
allliPersonObj[i].style.margin="1em";
allliPersonObj[i].style.listStyle="none";
allliPersonObj[i].style.border=`1px dotted ${arrNamesEn[i].colorObj}`;
}

}




//--------------------------------------------------------------------------------------

const handleShowLakes=(event)=>{

event.preventDefault();


//array.map() ... genereaza un alt array

const lakeDivs=lakeArr.map((lakeObj , index) =>{
//map are intotdeauna return

let divLake=document.createElement("div");
divLake.style.padding="1em";
divLake.style.margin="1em";
divLake.style.border=`3px dashed ${lakeObj.colorLake}`;

divLake.style.width="50%";
divLake.style.height="20em";
divLake.style.backgroundImage=`url(${lakeObj.imgLake})`;
divLake.style.backgroundSize="cover";
divLake.style.backgroundPosition="center";
divLake.style.backgroundRepeat="no-repeat";

divLake.innerText=lakeObj.nameLake;
divLake.style.color=lakeObj.colorLake;

return divLake;

});

//---------------

const articleLake=document.createElement("article");
articleLake.style.border="5px solid gray";
articleLake.style.width="90%";
articleLake.style.display="flex";
articleLake.style.alignItems="center";
articleLake.style.justifyContent="center";
articleLake.style.flexDirection="column";


lakeDivs.forEach((lakeDivEl , index) =>{
  articleLake.appendChild(lakeDivEl);
})
const lakeSection=document.getElementById('lakeSection');
lakeSection.appendChild(articleLake);
lakeSection.style.border="5px solid gold";
lakeSection.style.width="99%";
lakeSection.style.display="flex";
lakeSection.style.alignItems="center";
lakeSection.style.justifyContent="center";
lakeSection.style.flexDirection="column";
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (<>
    <section style={styleAnything}>
    <div className="App" style={styleAnything}>
<h1>function component is : {propText} .</h1>
<div>{nam} {ag} {emal}</div>

{usr}

<p>{getName()}</p>
<p>{getNameWithParam("Gigel")}</p>
<p>{getNameWithParam("Costel")}</p>
<p>{getNameWithParam("Ana Maria")}</p>

    </div>

    <div className="App" style={styleAnything}>
    {arrNames.map((elName , index) =>{
    //map are intotdeauna return
      return(
        <h3 key={index}>{getNameWithParam(elName)}</h3>
      );
    })}
    </div>

      <div className="App" style={styleAnything}>
<p>{getNameWithParamAndAge("Evghenie" , 25 , "indigo")}</p>

<button onClick={handleShowPersons}>click to show persons list</button>

<ul>
<li className="liPersonObj"></li>
<li className="liPersonObj"></li>
<li className="liPersonObj"></li>
</ul>

      </div>


  </section>


  <div className="App" style={styleAnything}>
<button onClick={handleShowLakes}>click to show lakes</button>
</div>

<section id="lakeSection"></section>


</>);
}

export default AppPedro;

//-----------------------------------------------------------------------------
