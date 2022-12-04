import React, {useState, useEffect} from "react";
import Axios from "axios";
import '../App.css';

//api:
//https://api.agify.io/?name=pedro

function AppAxiosPredictAge(props){


  //destructurare props
  const {propColor , propNr , propText}=props;


  const stylePredictAgeObj={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };


//---------------------------

const [name , setName]=useState("");

const [predictPerson , setPredictPerson]=useState({
  age:0,
  count:0,
  name:""
});

const handleAxiosDataObj=() =>{

console.log("you clicked to get data from API");

Axios.get(`https://api.agify.io/?name=${name}`).then((response) =>{
  console.log("@@@ response is : " , response);
  console.log("@@@ response.data is : " , response.data);
  console.log("@@@ response.data.age is : " , response.data.age);
  console.log("@@@ response.data.count is : " , response.data.count);

setPredictPerson(response.data) ;
})

}



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

return(

  <article style={stylePredictAgeObj}>

      <div className="App">
    <h1 style={stylePredictAgeObj}>function component is : {propText}</h1>
      </div>


<label htmlFor="userName">EX : Mihaela<br></br>
<input type="text" name="userName" id="userName" placeholder="your name" onChange={ (event) => {setName(event.target.value)} }/>
</label><br></br>

      <button onClick={handleAxiosDataObj}>predict age / show nr of people with your name</button>

            <h3>your name is : {predictPerson.name}</h3>
            <h3>your predicted age is : {predictPerson.age}</h3>
            <h3>number of people with your name is : {predictPerson.count}</h3>
   </article>

);


}

export default AppAxiosPredictAge;






























//
