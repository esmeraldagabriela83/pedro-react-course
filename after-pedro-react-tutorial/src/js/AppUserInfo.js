import React, {useState, useEffect} from "react";
import '../App.css';

//cata discord grupa 1 // 13.05.2022



function AppUserInfo(props){


  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleUserInfo={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------


  const [personAnd, setPersonAnd] = useState(
    {
      name: "Andrei",
      surname: "Popescu",
      age:15 ,
      img:"https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1600",
      color:"green",
      text:"lorem ipsum 1"
    }
  );

  //-------------------------modifica persoana cu useEffect


  //useEffect are 2 parametri
  useEffect(()=>{
    //functia setTimeout are 2 parametri : arrow function si timpul in secunde
    const tmidPerson=setTimeout( () =>{
  setPersonAnd(
    {
      name: "George",
      surname: "Ionescu",
      age:45 ,
      img:"https://images.pexels.com/photos/905375/pexels-photo-905375.jpeg?auto=compress&cs=tinysrgb&w=1600",
      color:"blue",
      text:"lorem ipsum 2"
    }
  );
      console.log("person changed name , surname , age , img ,  color , text and img in 3 seconds");
    } , 3000);

  } , []) ;


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={styleUserInfo}>

      <div className="App">
    <h1 style={styleUserInfo}>function component is : {propText}</h1>
      </div>


<h3> User {personAnd.name} {personAnd.surname} is {personAnd.age} years old .</h3>
<h3 style={{color:personAnd.color}}> His favoured color is {personAnd.color} .</h3>
<h3 style={{color:personAnd.color}}> His text is {personAnd.text} .</h3>

<img src={personAnd.img}
     alt="user-info-img"
     style={{width:'50%' ,
             border:`3px solid ${personAnd.color}` ,
             padding:"1em" ,
             margin:"1em",
             borderRadius:"15px"}}/>


    </article>

);

}

export default AppUserInfo;
