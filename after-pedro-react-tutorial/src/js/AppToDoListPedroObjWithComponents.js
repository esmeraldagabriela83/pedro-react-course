import React, {useState, useEffect} from "react";
import Task from "./Task.js";
import '../App.css';





function AppToDoListPedroObjWithComponents(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleToDoListObjComp={
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
  taskName:newTask ,
  completed:false
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

//---------------

const handleCompleteTask=(event , paramId) =>{

  event.preventDefault();
    console.log(`you clicked btn to complete Task with id ${paramId}`);


setToDoList(

toDoList.map((elTask) =>{

if(elTask.id === paramId){
  //destructurare obiect elTask
  return {...elTask , completed:true} ;
}else{
  return elTask ;
}

})

);


}



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
return(

  <article style={styleToDoListObjComp}>

      <div className="App">
    <h1 style={styleToDoListObjComp}>function component is : {propText}</h1>
      </div>


<div className="addTask"  style={styleToDoListObjComp} >

<h3>newTask is : {newTask}</h3>

<label htmlFor="userNewTask">Task:<br></br>
<input type="text" name="userNewTask" id="userNewTask" placeholder="write new task" onChange={handleChangeTask}/>
</label><br></br>

<button onClick={addTask}>add task</button>
</div>



<div className="list" style={styleToDoListObjComp} >

{toDoList.map((taskEl , index) =>{
//map are intotdeauna 0 callback function
return (
< Task propTaskName={taskEl.taskName}
       propId={taskEl.id}
       propCompleted={taskEl.completed}
       deleteTaskProp={deliteTaskBtn}
       completeTaskProp={handleCompleteTask}
       propColor={"BlueViolet"}
       propNr={370}
       propText={"Task"} />
);

})}


</div>



  </article>

);



}

export default AppToDoListPedroObjWithComponents;
