import React, {useState, useEffect} from "react";


import '../App.css';




const catLightsSrcImg="https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&w=1600";




function AppWriteNameCat(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const styleWithPropCat={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

  //---------------------------------------------
const [catName , setCatName]=useState("micu pisicu");

const [catTitle , setCatTitle]=useState(catName);

const handleCatName=(event) =>{
setCatName(event.target.value);
}

const handleChangeNameOfMyCat=(event) =>{
event.preventDefault();

  setCatTitle(catName);
}


  //--------------------------------------------------------
  return (
    <div className="App">
<h1 style={styleWithPropCat}>function component is : {propText}</h1>

<label htmlFor="catNameInput">write a name for my cat<br></br>
<input type="text" name="catNameInput" id="catNameInput" placeholder="name for my cat" onChange={handleCatName} style={{margin:"1em"}}/>
</label><br></br>

<img src={catLightsSrcImg} alt="lupuImg" style={{width:"50%" , border:"3px solid pink"}}/>

<h3>{catTitle}</h3>

<button type="button" onClick={handleChangeNameOfMyCat}>give my cat another name</button>

    </div>
  );
}

export default AppWriteNameCat;

//-----------------------------------------------------------------------------
