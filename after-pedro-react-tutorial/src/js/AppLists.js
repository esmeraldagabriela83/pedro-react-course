import React, {useState, useEffect} from "react";


import '../App.css';

function AppLists(props) {

  //destructurare props
  const {propColor , propNr , propText}=props;

  //-------------------------------------------

  const styleWithPropLists={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

  //-------arr---------

  const pedroNames=["Pedro" , "Jake" , "Jessica" , "Mike" , "Dustin"];

  //----//------------------arr with obj--------------------------------------------


const pedroUsers=[
  {
    name:"Stelian",
    age:45
  },
  {
    name:"Alexandrina",
    age:67
  },
  {
    name:"Vlad",
    age:90
  },
];

//-------construesc o functie componenta pt fiecare user din arr

const UserPedro=(props) =>{
//props tre sa fie un obiect cu 2 proprietati : name and age
//User tre sa fie o componenta functie care sa aiba 2 prop : name si age
return(

<div>{props.nameProp} {props.ageProp}</div>

);

};



  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <section style={styleWithPropLists}>

    <div className="App">
<h1 style={styleWithPropLists}>function component is : {propText}</h1>
    </div>

      <div className="App" style={{border:`1px solid red` , padding:"1em" , margin:"1em"}}>
{pedroNames.map((name , index) =>{
//map are o callback function intotdeauna cu return
return <h1>{name}</h1>;
})}
      </div>

            <div className="App" style={{border:`1px solid green` , padding:"1em" , margin:"1em"}}>
{pedroUsers.map((user , index) =>{
  //map are o callback function intotdeauna cu return
  return <ul key={index}>
<li>{user.name}</li>
<li>{user.age}</li>
  </ul>;
})}
            </div>

            <div className="App" style={{border:`1px solid blue` , padding:"1em" , margin:"1em"}}>
{pedroUsers.map((user , index) =>{
  //map are o callback function intotdeauna cu return
  return <div key={index}>{user.name} {user.age}</div>;
})}
            </div>


          <article className="App" style={{border:`1px solid darkmagenta` , padding:"1em" , margin:"1em"}}>
          {pedroUsers.map((user , index) =>{
            //map are o callback function intotdeauna cu return
            return(<div style={{border:`1px solid magenta` , padding:"1em" , margin:"1em"}}>
             <h3>function component is : UserPedro</h3>

              <div key={index}>
              <UserPedro nameProp={user.name} ageProp={user.age}/>
              </div>
              </div>);
          })}
          </article>
          
  </section>
);
}

export default AppLists;

//-----------------------------------------------------------------------------
