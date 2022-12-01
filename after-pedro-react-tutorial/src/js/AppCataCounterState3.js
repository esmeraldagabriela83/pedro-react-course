import React, {useState, useEffect} from "react";
import '../App.css';

const defaultImg="https://images.pexels.com/photos/13539516/pexels-photo-13539516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ;
const img1="https://images.pexels.com/photos/10515556/pexels-photo-10515556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ;
const img2="https://images.pexels.com/photos/14320969/pexels-photo-14320969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ;
const img3="https://images.pexels.com/photos/13790634/pexels-photo-13790634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ;

const stringDefault="string: lorem ipsum default";
const stringOne="string: lorem ipsum 1";
const stringTwo="string: lorem ipsum 2";
const stringThree="string: lorem ipsum 3";

function AppCataCounterState3(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleCataState3={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------


const [stateObj , setStateObj]=useState(
  {
  indexObj:1,
  colorObj:"Chartreuse",
  imgObj:defaultImg,
  stringObj:stringDefault
}
);


//-------------change obj state obj // destructurare  // spread operator

const handleChangeObjDefaultState=(event , indexParam , colorParam , imgParam , stringParam) =>{

  event.preventDefault();

    console.log(`you clicked btn to change the default obj index: ${stateObj.indexObj} into ${indexParam}........... `);


//destructurare a obiectului stateObj pt a obtine keys // proprietati
let { indexObj , colorObj , imgObj , stringObj }=stateObj;


//destructurare cu spread operator

const newCopyStateObj={...stateObj , indexObj:indexParam , colorObj:colorParam , imgObj:imgParam , stringObj:stringParam};

setStateObj(newCopyStateObj);
}



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
return(

  <section style={styleCataState3}>

      <div className="App">
    <h1 style={styleCataState3}>function component is : {propText}</h1>
    <p>13.05.2022 discord gr 1 with obj  in state and parameter passing</p>
      </div>


<button onClick={(event) =>handleChangeObjDefaultState(event , 2 , "green" , img1 , stringOne)}>change img , green</button>
<button onClick={(event) =>handleChangeObjDefaultState(event , 3 , "red" , img2 , stringTwo)}>change img , red</button>
<button onClick={(event) =>handleChangeObjDefaultState(event , 4 , "blue" , img3 , stringThree)}>change img , blue</button>

<button onClick={(event) =>handleChangeObjDefaultState(event , 1 , "Chartreuse" , defaultImg , stringDefault)}>change to default</button>


<article style={styleCataState3}>

<h3>index of object is : {stateObj.indexObj}</h3>

<p style={{color:stateObj.colorObj}}>string is : {stateObj.stringObj}</p>

<img src={stateObj.imgObj}  alt="img-from-state-obj" style={{width:`50%` , border:`3px solid ${stateObj.colorObj}` , padding:"0.5em" , margin:"1em" , backgroundColor:propColor}}/>

</article>







  </section>

);



}

export default AppCataCounterState3;
