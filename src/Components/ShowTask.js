import React from "react";

function ShowTask({taskList,setTaskList}) {
  
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll" onClick={()=> setTaskList([])}>Clear All</button>
      </div>
      <ul>
      {taskList.map((task) =>
         ( 
          <li key={task.id}>
          <p>
            <span className="name"> {task.name}</span>
            <span className="time">{task.time}</span>
          </p>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash"></i>
        </li>
        )
      )}
       
        
      </ul>
    </section>
  );
}

export default ShowTask;
