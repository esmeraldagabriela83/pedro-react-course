import React, {useState, useEffect} from "react";


import '../App.css';


const myDogSRC="https://images.pexels.com/photos/11245929/pexels-photo-11245929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const myCatSRC="https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1600";


const trueContentDog=<div>
<div style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>
<p>my dog</p>
<img src={myDogSRC} alt="my-dog" style={{width:"50%" , border:"3px solid yellow"}}/>
</div>
</div>;


const falseContentCat=<div>
<div style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>
<p>my cat</p>
<img src={myCatSRC} alt="my-cat" style={{width:"50%" , border:"3px solid yellow"}}/>
</div>
</div>;


function AppLists(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const styleBooleanContent={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor
  };

  //-------------------------

const [stateUser , setStateUser]=useState(false);

const handleChangeStateContent=(event , param) =>{
event.preventDefault();

setStateUser(param);

}

  //--------------------------------------------------------
  return (<section style={styleBooleanContent}>
    <div className="App">
<h1 style={styleBooleanContent}>function component is : <em style={{fontFamily:"Arial,Helvetica sans-serif"}}>{propText}</em></h1>
    </div>

    <article className="App"  style={styleBooleanContent}>

<h1 style={{color:stateUser ? "green" : "red" }}>my color is depending on stateUser</h1>
<h1 style={{color:stateUser ? "green" : "red" }}>{stateUser ? "true" : "false"}</h1>

{stateUser ? trueContentDog : falseContentCat}

<button onClick={(event) =>handleChangeStateContent(event , !stateUser)} style={{margin:"1em" , padding:"1em" , color:stateUser ? "green" : "red"}}>change state : {stateUser ? "true" : "false"}</button>

    </article>
  </section>);
}

export default AppLists;

//-----------------------------------------------------------------------------
