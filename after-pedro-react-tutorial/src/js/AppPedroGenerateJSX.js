import React, {useState, useEffect} from "react";
import mypersons from "./persons.js";
import lakeArr from "./lake.js";

import '../App.css';

console.log("---mypersons is : " , mypersons);
console.log("---lakeArr is : " , lakeArr);



function AppPedroGenerateJSX(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const styleWithPropSecond={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"
  };

  //-----------------------------return a string----------------------------------------

    const myName="Petrisor";


    //------------------------------

    //React Component generates JSX

    const getNameComponent=()=>{
      return<h1>your name is {myName}</h1>;
    }

//------------------------------return an el of an arr-------------------------------------------------

const animalsArr=["dog" , "cat" , "elephant" , "snake" , "mouse"];

const getAnimalComponent=(param) =>{
  return<h1><em style={{color:propColor}}>{param}</em> se plimba prin parc.</h1>;
}

//----------------------return an el obj from an arr------------------

const getLakeComponent=(nrParam , nameParam , colorParam , imgParam) =>{
  return(
    <article style={{border:`3px dashed ${colorParam}` , padding:"1em" , width:"90%" , margin:"1em" , display:"flex" , alignItems:"center" , justifyContent:"center" , flexDirection:"column"}}>
    <div  style={{
      margin:"1em",
      width:"50%",
      height:"20em",
      backgroundImage:`url(${imgParam})`,
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      border:`3px solid ${colorParam}`
    }}>{nrParam}</div>
    <p>{nameParam} has code {nrParam}</p>
    </article>
  );
}


  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  return (<>

    <div className="App" style={styleWithPropSecond}>
<h1>function component is : {propText}</h1>

{getNameComponent()}
    </div>

        <section className="App" style={styleWithPropSecond}>
{mypersons.map((persoObj , index)=>{
//map are intotdeauna return
  return(

<article key={index} style={{margin:"1em" , padding:"1em" , border:`1px dassed ${propColor}`}}>
<p>Person`s name is : {persoObj.name} {persoObj.surname} and the tel nr is {persoObj.tel}</p>

<div style={{
  width:"20em",
  height:"15em",
  backgroundImage:persoObj.urlImage,
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat"
}}>
{persoObj.code}
</div>

</article>

  );
})}
        </section>


    <div className="App">
{animalsArr.map((animalEl , index) =>{
//map are intotdeauna return
  return(
    <div key={index} style={{padding:"1em" , margin:"1em" , border:`1px dotted ${propColor}`}}>{getAnimalComponent(animalEl)}</div>
  );
})}
    </div>


        <section className="App" style={styleWithPropSecond}>

{lakeArr.map((lakeEl , index) =>{
//map are intotdeauna return
  return(getLakeComponent(lakeEl.indexLake , lakeEl.nameLake , lakeEl.colorLake , lakeEl.imgLake));
})}

        </section>


  </>);
}

export default AppPedroGenerateJSX;

//-----------------------------------------------------------------------------
