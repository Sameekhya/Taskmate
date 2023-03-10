import React from "react";


function Addtask({ taskList, setTaskList }) 
{
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    console.log(date);
    console.log(taskList);
    const newTask = 
      {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
      }
    
    setTaskList([...taskList, newTask]);
    console.log({ newTask });
    e.target.task.value="";
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
          />
          <button type="submit">Add</button>
        </form>
      </section>
     
    </div>
  );
}

export default Addtask;
