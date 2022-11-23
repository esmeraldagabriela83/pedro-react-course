import React, {useState, useEffect} from "react";

import '../App.css';


function AppConditionalRenderingJSXmaritalStatus(props){

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

const [maritalStatus , setMaritalStatus]=useState();

const handleMaritalStatus=(event) =>{
setMaritalStatus(event.target.value);
}

const handleMaritalUser=(event) =>{
event.preventDefault();

const showMaritalStatus=document.getElementById('showMaritalStatus');



if(maritalStatus === "married"){
showMaritalStatus.innerText="YOU ARE MARRIED";
showMaritalStatus.style.fontFamily="Poppins', sans-serif";
showMaritalStatus.style.fontWeight="medium";
showMaritalStatus.style.color="magenta";
}else{
  showMaritalStatus.innerText="YOU ARE NOT MARRIED";
  showMaritalStatus.style.fontFamily="'Rubik Distressed', cursive";
  showMaritalStatus.style.fontWeight="bold";
  showMaritalStatus.style.color="yellowgreen";
}

}

    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <div className="App">

<label htmlFor="name">married / unmarried<br></br>
<input type="text" id="maritalInputStatus" name="maritalInputStatus" placeholder="married or not" onChange={handleMaritalStatus}/>
</label>

<h3 id="showMaritalStatus" style={{fontSize:"1.5rem" , letterSpacing:"0.5em"}}></h3>

<button type="button" onClick={handleMaritalUser}>marital status</button>
  </div>

);



}

export default AppConditionalRenderingJSXmaritalStatus;
