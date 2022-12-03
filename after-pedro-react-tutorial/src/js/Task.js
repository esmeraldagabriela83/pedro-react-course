import React, {useState, useEffect} from "react";
import '../App.css';



function Task(props){

  //destructurare props
  const {propTaskName , propId , propCompleted , deleteTaskProp , completeTaskProp ,  propColor , propNr , propText}=props;


  const styleToDoListTask={
    padding:"1em",
    margin:"1em",
    border:`3px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------



return(

  <article style={styleToDoListTask}>

      <div className="App">
    <h1 style={styleToDoListTask}>function component is : {propText}</h1>
      </div>


      <div key={propId} style={styleToDoListTask} className="task" style={{backgroundColor:propCompleted ? "green" : "yellow"}}>

        <h1>task {propId} is : {propTaskName}</h1>
        <button onClick={(event) => completeTaskProp(event , propId)}>Complete</button>
        <button onClick={(event) => deleteTaskProp(event , propId)}>delete task</button>

      </div>

   </article>

);



}

export default Task ;
