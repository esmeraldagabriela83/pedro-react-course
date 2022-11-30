import React, {useState, useEffect} from "react";
import '../App.css';



function AppShowInputValPedro(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleINPUTbTNPedro={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------

const [userString , setUserString]=useState("");

const handleInputChangeString=(event) =>{
console.log("event.target.value is : " , event.target.value);

setUserString(event.target.value);
}

const handleBtnChange=(event) =>{
  event.preventDefault();

console.log("you clicked show string btn");

const showStringTitle=document.getElementById('showStringTitle');
showStringTitle.innerText=userString;
showStringTitle.style.color="white";
showStringTitle.style.padding="1em";
showStringTitle.style.margin="1em";
showStringTitle.style.backgroundColor=propColor;

}

//---------------------------------------------------------------------------or
const [titleString , setTitleString]=useState("");

const [stringUser , setStringUser]=useState("");

const handleInputChangeUserString=(event) =>{
  console.log("event.target.value is : " , event.target.value);

  setStringUser(event.target.value);
}

const handleBtnChangeTitleState=(event) =>{

  event.preventDefault();

console.log("you clicked show string and change title state btn");
setTitleString(stringUser);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <section style={styleINPUTbTNPedro}>

    <div className="App">
  <h1 style={styleINPUTbTNPedro}>function component is : {propText}</h1>
    </div>


<article className="App" style={{border:`1px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

    <input type="text" name="userString" id="userString" placeholder="write string" onChange={handleInputChangeString}/>

    <h1>userString is : {userString}</h1>

    <button onClick={handleBtnChange}>show your string</button>
    <h1 id="showStringTitle"></h1>

</article>


<article className="App" style={{border:`1px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

  <input type="text" name="userString" id="userString" placeholder="write string" onChange={handleInputChangeUserString}/>
<h1>stringUser is : {stringUser}</h1>

  <button onClick={handleBtnChangeTitleState}>show your string</button>

<h1>{titleString}</h1>
</article>


</section>


);



}

export default AppShowInputValPedro;
