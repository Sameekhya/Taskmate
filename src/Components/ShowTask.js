import React from "react";

function ShowTask({taskList}) {
  const tasks = 
  [
    { id: 10001, name: "TASK A", time: "2:00 AM" },
    { id: 10002, name: "TASK B", time: "2:00 AM" },
    { id: 10003, name: "TASK C", time: "2:00 AM" },
    { id: 10004, name: "TASK D", time: "2:00 AM" },
  ];
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>
      <ul>
      {tasks.map((task) =>
        {
        return ( 
          <li key={task.id}>
          <p>
            <span className="name"> {task.name}</span>
            <span className="time">{task.time}</span>
          </p>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash"></i>
        </li>
        )
      })}
       
        
      </ul>
    </section>
  );
}

export default ShowTask;
