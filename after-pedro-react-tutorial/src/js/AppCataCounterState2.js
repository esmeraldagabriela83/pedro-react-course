import React, {useState, useEffect} from "react";
import '../App.css';


function AppCataCounterState2(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleCounter2Cata={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------
const [state , setState] = useState({
  counter:0,
  myColor:'Chartreuse'
})



//---------

const handleCount2=(event , val , colorParam) =>{
  event.preventDefault();

  console.log(`you clicked btn to add the parameter: ${val}  to ${state.counter} , and change color ${state.myColor}  into ${colorParam}`);

//destructurare a obiectului state pt a obtine cele 2 proprietati , keys
  let {counter , myColor} = state;
  
//destructurare cu spread operator
const newStateObj={...state , counter: val != 0 ? counter + val : 0 , myColor:colorParam } ;

setState(newStateObj);
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={styleCounter2Cata}>

      <div className="App">
    <h1 style={styleCounter2Cata}>function component is : {propText}</h1>
    <p>13.05.2022 discord gr 1 with obj  in state and parameter passing</p>
      </div>


    <h2 style={{color:state.myColor}}>Click count {state.counter}</h2>

<button onClick={(event) =>handleCount2(event , 1 , 'green')}>+ , green</button>
<button onClick={(event) =>handleCount2(event , -1 , 'red')}>- , red</button>
<button onClick={(event) =>handleCount2(event , 0 , 'blue')}>set to 0 , blue</button>


  </article>

);


}

export default AppCataCounterState2;
