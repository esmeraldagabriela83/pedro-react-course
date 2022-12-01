import React, {useState, useEffect} from "react";
import '../App.css';




function AppToDoListPedro(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleToDoListObj={
    padding:"1em",
    margin:"1em",
    border:`1px solid ${propColor}`,
    color:propColor,
    fontFamily:"Arial,Helvetica sans-serif"
  };

//---------------------


const [toDoList , setToDoList]=useState([]);

const [newTask , setNewTask]=useState("");


const handleChangeTask=(event) =>{
  event.preventDefault();

  setNewTask(event.target.value);
};

//----------------


const addTask=(event) =>{

  event.preventDefault();
  console.log("you clicked btn to add task");

const task={
  id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1 ,
  taskName:newTask
};

  //destructurare array

  const newCopyToDoList=[...toDoList , task];
  setToDoList(newCopyToDoList);

};

//----------------


const deliteTaskBtn=(event , paramId) =>{

  event.preventDefault();
    console.log(`you clicked btn to delete task with id ${paramId}`);

//use the filter function (wich contains a call back function) to delite the selected task from the list

const newToDoList=toDoList.filter((elTask) =>{

// if(elTask.id === paramId){
//   return false ;
// }else{
//   return true;
// }

//short if statement
return elTask.id !== paramId ? true : false ;


}) ;

setToDoList(newToDoList);
}



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
return(

  <article style={styleToDoListObj}>

      <div className="App">
    <h1 style={styleToDoListObj}>function component is : {propText}</h1>
      </div>


<div className="addTask"  style={styleToDoListObj} >

<h3>newTask is : {newTask}</h3>

<label htmlFor="userNewTask">Task:<br></br>
<input type="text" name="userNewTask" id="userNewTask" placeholder="write new task" onChange={handleChangeTask}/>
</label><br></br>

<button onClick={addTask}>add task</button>
</div>



<div className="list" style={styleToDoListObj} >

{toDoList.map((taskEl , index) =>{
//map are intotdeauna 0 callback function
return (<div key={index} style={styleToDoListObj} >

<h1>task {index + 1} is : {taskEl.taskName}</h1>
<button onClick={(event) => deliteTaskBtn(event , taskEl.id)}>delete task</button>

</div>);

})}


</div>



  </article>

);



}

export default AppToDoListPedro;
