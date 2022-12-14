import React, {useState, useEffect} from "react";
import mypersons from "./persons.js";
import lakeArr from "./lake.js";
import Person from "./Person.js";
import LakeFunctionComponent from "./LakeFunctionComponent.js";
import '../App.css';

console.log("mypersons from AppListsAfterPedro function component---" , mypersons);



function AppListsAfterPedro(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const styleWithPropListPedro={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };


  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (<section style={styleWithPropListPedro}>
    <div className="App">
<h1 style={styleWithPropListPedro}>function component is : {propText}</h1>
    </div>


    <article className="App" style={{border:`1px solid olive` , padding:"1em" , margin:"1em"}}>

{mypersons.map((person , index)=>{
  //map are o callback function intotdeauna cu return
  return(
    <Person propCode={person.code} propName={person.name} propSurname={person.surname} propImg={person.urlImage} propTel={person.tel} propColor={"plum"} propText={"Person"}/>
  )
})}

    </article>

    <p>make the same for the lakes arr</p>


        <article className="App" style={{border:`1px solid Chocolate` , padding:"1em" , margin:"1em"}}>

{ lakeArr.map((lake , index) =>{
//map are o callback function intotdeauna cu return
  return (
    <LakeFunctionComponent propIndexLake={lake.indexLake} propNameLake={lake.nameLake} propColorLake={lake.colorLake} propImgLake={lake.imgLake} propColor={"Chocolate"} propText={"LakeFunctionComponent"} />
  );
}) }


        </article>

  </section>);
}

export default AppListsAfterPedro;

//-----------------------------------------------------------------------------
