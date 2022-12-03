import React, {useState, useEffect} from "react";
import '../App.css';



function App2users(props){


  //destructurare props
  const {propColor , propNr , propText}=props;


  const style2Users={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------
  const [clicks,setClicks] = useState(1);

const [persons,setPersons] = useState([
    {
      name:"Alexandru",
      surname:"Costache"
    },
    {
      name:"Cristina",
      surname:"Popesco"
    }
  ]);

  //-------------------

  //echivalent componentDidMount
  //useEffect(functie, []) - array gol ca al doilea parametru
  useEffect(()=>{
    console.log("did mount")

setTimeout(() =>{
  let newPersons=[...persons];
newPersons[0].name="Alexandra";
newPersons[0].surname="Acke";
newPersons[1].name="Victor";
newPersons[1].surname="Vladimirovici";

setPersons(newPersons);
}, 5000);

  },[]);

//-------------------------


const handleClick = (e) =>{
   setClicks(clicks + 1);
 }
 //echivalent componentDidUpdate
 //useEffect(functie, [stateVar]) - array care contine variabilele de state monitorizate
 useEffect(()=>{
   console.log("did update");
   //nu am voie sa-l modific pe clicks aici
   //nu am voie sa apelez setClicks!!!
 },[persons]);



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={style2Users}>

      <div className="App">
    <h1 style={style2Users}>function component is : {propText}</h1>
      </div>


           <p>
            1  the person`s name  is :{persons[0].name}<br></br>
            1  the person`s surname  is :{persons[0].surname}<br></br>
            2  the person`s name  is :{persons[1].name}<br></br>
            2  the person`s surname  is :{persons[1].surname}<br></br>
            </p>

<button style={{cursor:"pointer"}} onClick={handleClick}>increase nr of clicks</button>

<p> {clicks} clicks</p>

    </article>

);



}

export default App2users;
