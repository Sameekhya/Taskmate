import React from "react";
import "./AddTask.css"


function Addtask({ taskList, setTaskList,task,setTask }) 
{
  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.id){
      const date = new Date();
      const updatedTaskList = taskList.map((todo) => (
        todo.id === task.id ? {id:task.id, name:task.name, time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`} : {id: todo.id, name:todo.name, time:todo.time}
      ))
      
      setTaskList(updatedTaskList)
      setTask({})
      
      
    }else{
      const date = new Date();

    const newTask = 
      {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
      }
    
    setTaskList([...taskList, newTask]);
   
    setTask({})
    }
    
  };
  return (
    <div>
      <section className="addTask">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            autoComplete="off"
            placeholder="addtask"
            maxLength="25"
            value={task.name || ""}
            onChange ={
              e=> setTask({...task, name:e.target.value})}
          />
          <button type="submit">{task.id?"Update" : "Add"}</button>
        </form>
      </section>
     
    </div>
  );
}

export default Addtask;
