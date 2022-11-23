import React, {useState, useEffect} from "react";
import AppConditionalRenderingMaritalStatus from "./AppConditionalRenderingMaritalStatus.js";

import '../App.css';

function AppTernaryOperators(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const styleWithPropIfStatement={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor
  };

  //---------------------------------------------------------------------------

const exAge=15;

if(exAge >= 18){
  console.log("is over exAge");
}else{
    console.log("is under exAge");
}

//--------------------------operator ternary

exAge >= 18 ? console.log("you can drive a car") : console.log("you cannot drive a car")

  //---------------------------------------------------------------------------


const [inputUserValoare , setInputUserValoare]=useState(0);

//---------alcohol pernission of user---------------------------------

const handleAgeUser=(event)=>{

setInputUserValoare(event.target.value) ;
}

//-----------------

const handleAgePermission=(event) =>{
event.preventDefault();

const showIf=document.getElementById('showIf');

if(inputUserValoare >= 18){
  console.log("alcohol");
showIf.innerText="you can drink alcohol";
showIf.style.color="yellowgreen";
}else{
    console.log("no alcohol");
    showIf.innerText="you cannot drink alcohol";
    showIf.style.color="tomato";
}

}

//---------------------------drive permission of user-------------------------------------------------------

const [driveAge , setDriveAge]=useState(0);

const handleAgeDriveUser=(event) =>{
  setDriveAge(event.target.value);
}


const handleAgeDriveBtn=(event) =>{
event.preventDefault();

  const showIfDrive=document.getElementById('showIfDrive');
  showIfDrive.style.padding="1em";
  showIfDrive.style.margin="1em";
  showIfDrive.style.border=`1px solid ${propColor}`;

//if statement // operator ternar //conditional rendering
//   ? if  //: else
//conditie ? statement 1 : statement 2

driveAge >= 18 ? showIfDrive.innerText="you are allowed to driva a car" : showIfDrive.innerText="you are allowed to walk or run" ;
driveAge >= 18 ? showIfDrive.style.color="yellowgreen" : showIfDrive.style.color="tomato" ;
driveAge >= 18 ? showIfDrive.style.border="1px solid yellowgreen" : showIfDrive.style.border="1px solid tomato" ;

}

//--------------------------------react conditional rendering ------------------

const [userGender , setUserGender]=useState("");
const [ageOfUser , setAgeOfUser]=useState(0);


//----------

const handleInputGender=(event) =>{
  setUserGender(event.target.value);
}

const handleUserage=(event) =>{
  setAgeOfUser(event.target.value);
}

const handleSubmitUserIf=(event) =>{
event.preventDefault();

console.log("user submited the form");

const showIfGenderAge=document.getElementById('showIfGenderAge');

if(userGender === "boy" && ageOfUser >= 18){
  console.log("no smoking");
  showIfGenderAge.innerText="you are not allowed to smoke";
}else if(userGender === "boy" && ageOfUser < 18){
  console.log("yes hat");
  showIfGenderAge.innerText="you are  allowed to wear a hat";
}else if(userGender === "girl" && ageOfUser >= 18){
    console.log("yes pie");
    showIfGenderAge.innerText="you are  allowed to make a pie";
}else{
    console.log("yes dress");
  showIfGenderAge.innerText="you are  allowed to wear a dress";
}


}

//-------------pedro example conditional rendering JSX-------------------------------------




  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  return (<section style={styleWithPropIfStatement}>

    <div className="App">
<h1 style={styleWithPropIfStatement}>function component is : {propText}</h1>
    </div>

    <div className="App" style={styleWithPropIfStatement}>

<label htmlFor="inpuyNrUser">write your age for alcohol permission<br></br>
<input type="number" id="inpuyNrUser" name="inpuyNrUser" placeholder="write nr" onChange={handleAgeUser}/>
</label>

<button type="button" onClick={handleAgePermission}>show permission</button>

<h3 id="showIf"></h3>

    </div>





    <div className="App" style={styleWithPropIfStatement}>

    <label htmlFor="inpuyNrDriveUser">write your age for drink permission<br></br>
<input type="number" id="inpuyNrDriveUser" name="inpuyNrDriveUser" placeholder="write nr" onChange={handleAgeDriveUser}/>
    </label>

    <button type="button" onClick={handleAgeDriveBtn}>show permission</button>

<h3 id="showIfDrive"></h3>

    </div>




        <div className="App" style={styleWithPropIfStatement}>

<form  onSubmit={handleSubmitUserIf}>

<label htmlFor="userInputGender">Choose between "boy" or "girl"<br></br>
<input type="text" name="userInputGender" id="userInputGender" placeholder="boy/girl" onChange={handleInputGender}/>
</label><br></br>

<label htmlFor="userInputage">your age:<br></br>
<input type="nr" name="userInputage" id="userInputage" placeholder="age nr" onChange={handleUserage}/>
</label><br></br>

<button type="submit">submit form</button>
</form>

<h3 id="showIfGenderAge"></h3>
        </div>

              <div className="App" style={styleWithPropIfStatement}>
        <h1><em>AppConditionalRenderingMaritalStatus</em> function component</h1>
        <AppConditionalRenderingMaritalStatus  propColor={"skyblue"} propNr={970} propText={"AppConditionalRenderingMaritalStatus"}/>
        </div>

  </section>);
}

export default AppTernaryOperators;

//-----------------------------------------------------------------------------
