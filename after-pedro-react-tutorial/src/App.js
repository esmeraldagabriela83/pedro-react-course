import React, {useState, useEffect} from "react";
import './App.css';

import AppWriteNameCat from "./js/AppWriteNameCat.js";
import AppPedroSecond from "./js/AppPedroSecond.js";
import AppPedroGenerateJSX from "./js/AppPedroGenerateJSX.js";
import AppPedroGenerateJSXFunctionComponent from "./js/AppPedroGenerateJSXFunctionComponent.js";
import AppJobPedroHomework from "./js/AppJobPedroHomework.js";

import AppTernaryOperators from "./js/AppTernaryOperators.js";
import AppConditionalRenderingJSX from "./js/AppConditionalRenderingJSX";
import AppConditionalRenderingAndBoolean from "./js/AppConditionalRenderingAndBoolean.js";
import AppConditionalRenderingBooleanContent from "./js/AppConditionalRenderingBooleanContent";

import AppLists from "./js/AppLists.js";
import AppListsAfterPedro from "./js/AppListsAfterPedro.js";
import AppListsAfterPedroPlanets from "./js/AppListsAfterPedroPlanets.js";
import AppListsPlanetsPedroSolution from "./js/AppListsPlanetsPedroSolution.js";
import AppStatePedro from "./js/AppStatePedro.js";
import AppInputPedro from "./js/AppInputPedro.js";
import AppShowInputValPedro from "./js/AppShowInputValPedro.js";
import AppShowHidePedro from "./js/AppShowHidePedro.js";

import logo from './logo.svg';
//import './App.css';

// function App() {
//   return (
//     <div className="App">
//
//     </div>
//   );
// }
//
// export default App;

//-----------------------------------------------------------------------------

//this App
//https://www.youtube.com/watch?v=f55qeKGgB_M&t=616s
//React Course For Beginners - Learn React in 8 Hours


//props JSX
//CSS in React  (import styles from  '../App.modulo.css';)  iar JSX :

// <div className={styles.App}>
// <h1>function component is : {propText}</h1>
// </div>

// ternary operators (allows me to write if statements // conditional rendering), lists in React

//module 4 states in react useState Hook

//-----------------------------------------------------------------------------

const dogSrcImg="https://images.pexels.com/photos/2683998/pexels-photo-2683998.jpeg?auto=compress&cs=tinysrgb&w=1600";

const myStyleCenter={
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  margin:"1em",
  padding:"1em",
  border:"1px solid green"
};

//------------------------------------------------------------------------------



function App(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  //----------------------------------------------------------



//components and props

//---------------

const [dogName , setDogName]=useState("Lupusoru");


//--------------- — 13.05.2022 18:49 grupa 1 discord react--------------toUpperCase() and toLowerCase()
//https://www.w3schools.com/jsref/jsref_touppercase.asp

//echivalent componentDidMount
 //useEffect(functie, []) - array gol ca al doilea parametru
 useEffect(()=>{
   console.log("did mount dog / App");
   setDogName(dogName.toUpperCase());
   //--------------------just JS
   document.getElementById('dogName').innerText=`function component is : ${propText}`;
   document.getElementById('dogName').style.border=`1px solid ${propColor}`;
   document.getElementById('dogName').style.color=propColor;
 },[]);


 useEffect(()=>{
    console.log("dogName did update / App");
  },[dogName])


//---------------

const handleChangeUserDogName=(event)=>{

setDogName(event.target.value);

}


//--------change dog name with the user input value when clicking the btn----------

const handleDogNameUser=(event) =>{

event.preventDefault();

console.log("you clicked the btn dog");
console.log(`you are inside ${propText} function component`);

//just like JS
const newDogName=document.getElementById('newDogName');
newDogName.innerText=dogName;

newDogName.style.color=propColor;
newDogName.style.padding="0 1em";
newDogName.style.margin="0 1em";
newDogName.style.border=`1px solid ${propColor}`;

//------select the btn then style it-----------

const dogNameBtn=document.getElementById('dogNameBtn');

dogNameBtn.style.backgroundColor=propColor;
dogNameBtn.style.color="skyblue";

}

//-----------------------------------------------------------

const handleChangeNameLupusoru=(event ,  string)=>{

event.preventDefault();

setDogName(string);

}

//---------------------------------------------

const name="Mih Gab";
const age=39;
const email="mihGab@gmail.com";
const surname=<span>Aco</span>

//------------------------------------------------------------------------------

const dog=<h3 style={{textAlign:"center"}}>my dog`s name is <em style={{color:propColor}}>{dogName}</em>.</h3>;
const dogAge=<h3>It has 3 years old.</h3>;
const locationDog=<h3>It lives in Deleni village.</h3>;

const dogAffection=
<article>

<p>It is loved by my parents and {name} at the same time. It has {propNr} legs.</p>

<div style={myStyleCenter}>
<label htmlFor="dogInput">write a name for my dog:<br></br>
<input type="text" name="dogInput" id="dogInput" placeholder="dog name" onChange={handleChangeUserDogName}/>
</label>
</div>

<div style={myStyleCenter}>
<img src={dogSrcImg} alt="lupuImg" style={{width:"50%" , border:"3px solid pink"}}/>
</div>

<div style={myStyleCenter}>
<button type="button" id="dogNameBtn" onClick={handleDogNameUser} style={{cursor:"pointer" , margin:"1em" , padding:"1em" , border:"none"}}>click dog`s new name</button>
<p>the new name of dog: <span id="newDogName"></span></p>
</div>

</article>;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (<>

    <div className="App" style={{padding:"1em" , margin:"1em" , border:`1px solid ${propColor}`}}>
<h1>function component is : {propText}</h1>
    </div>

<section style={{border:`1px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h2 id="dogName"></h2>
<h1>pedro after course. <em style={{color:propColor}}>{propText} function component</em></h1>
<h1>hello {name} . you are {30 + 9} years old.</h1>
<h1>my age is age variable: {age}. My email is email variable : {email}</h1>
<p>your surname is : {surname}</p>

{dog}{dogAge}{locationDog}

{dogAffection}

<div style={myStyleCenter}>
<p>change the dog`s name with one of thise:</p>
<button type="button" onClick={(event) =>handleChangeNameLupusoru(event , "Grivei")}>Grivei</button>
<button type="button" onClick={(event) =>handleChangeNameLupusoru(event , "Rex")}>Rex</button>
<button type="button" onClick={(event) =>handleChangeNameLupusoru(event , "Ham Ham")}>Ham Ham</button>
</div>

</section>

<AppWriteNameCat propColor={"peru"} propNr={79} propText={"AppWriteNameCat"}/>
<AppPedroSecond propColor={"gold"} propNr={79} propText={"AppPedroSecond"}/>
<AppPedroGenerateJSX propColor={"cornflowerblue"} propNr={49} propText={"AppPedroGenerateJSX"}/>
<AppPedroGenerateJSXFunctionComponent propColor={"magenta"} propNr={500} propText={"AppPedroGenerateJSXFunctionComponent"}/>
<AppJobPedroHomework  propColor={"DarkSeaGreen"} propNr={50} propText={"AppJobPedroHomework"}/>

<AppTernaryOperators  propColor={"DarkSlateGray"} propNr={50} propText={"AppTernaryOperators"}/>
<AppConditionalRenderingJSX  propColor={"Brown "} propNr={500} propText={"AppConditionalRenderingJSX"}/>
<AppConditionalRenderingAndBoolean  propColor={"magenta "} propNr={530} propText={"AppConditionalRenderingAndBoolean"}/>
<AppConditionalRenderingBooleanContent  propColor={"MediumVioletRed"} propNr={570} propText={"AppConditionalRenderingBooleanContent"}/>

<AppLists  propColor={"Maroon"} propNr={570} propText={"AppLists"}/>
<AppListsAfterPedro  propColor={"MediumSlateBlue "} propNr={570} propText={"AppListsAfterPedro"}/>

<AppListsAfterPedroPlanets  propColor={"Plum"} propNr={500} propText={"AppListsAfterPedroPlanets"}/>
<AppListsPlanetsPedroSolution  propColor={"RosyBrown"} propNr={500} propText={"AppListsPlanetsPedroSolution"}/>

<AppStatePedro  propColor={"Turquoise"} propNr={500} propText={"AppStatePedro"} />
<AppInputPedro  propColor={"SandyBrown"} propNr={500} propText={"AppInputPedro"} />
<AppShowInputValPedro  propColor={"SteelBlue"} propNr={500} propText={"AppShowInputValPedro"} />

<AppShowHidePedro  propColor={"SeaGreen"} propNr={500} propText={"AppShowHidePedro"} />


</>  );
}

export default App;
