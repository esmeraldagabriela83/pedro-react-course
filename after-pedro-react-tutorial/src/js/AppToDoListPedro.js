import React, {useState, useEffect} from "react";
import '../App.css';




function AppToDoListPedro(props){

  //destructurare props
  const {propColor , propNr , propText}=props;


  const styleToDoList={
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

  //destructurare array

  const newCopyToDoList=[...toDoList , newTask];
  setToDoList(newCopyToDoList);

};

//----------------


const deliteTaskBtn=(event , paramTask) =>{

  event.preventDefault();
    console.log(`you clicked btn to delete task ${paramTask}`);

//use the filter function (wich contains a call back function) to delite the selected task from the list

const newToDoList=toDoList.filter((elTask) =>{

// if(elTask === paramTask){
//   return false ;
// }else{
//   return true;
// }

//short if statement
return elTask !== paramTask ? true : false ;


}) ;

setToDoList(newToDoList);
}



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
return(

  <article style={styleToDoList}>

      <div className="App">
    <h1 style={styleToDoList}>function component is : {propText}</h1>
    <p>tasks with the same name can be bouth deleted once , because they are strings inside an arr , not obj with index</p>
      </div>


<div className="addTask"  style={styleToDoList} >

<h3>newTask is : {newTask}</h3>

<label htmlFor="userNewTask">Task:<br></br>
<input type="text" name="userNewTask" id="userNewTask" placeholder="write new task" onChange={handleChangeTask}/>
</label><br></br>

<button onClick={addTask}>add task</button>
</div>



<div className="list" style={styleToDoList} >

{toDoList.map((taskEl , index) =>{
//map are intotdeauna 0 callback function
return (<div key={index} style={styleToDoList} >

<h1>task {index + 1} is : {taskEl}</h1>
<button onClick={(event) => deliteTaskBtn(event , taskEl)}>delete task</button>

</div>);

})}


</div>



  </article>

);



}

export default AppToDoListPedro;
