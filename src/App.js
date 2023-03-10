import React, { useState ,useEffect} from "react";
import Header from "./Components/Header";

import Addtask from "./Components/Addtask";
import ShowTask from "./Components/ShowTask";
import "./App.css"

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
    
  }, [taskList])
  

  return (
   
    <div className="App">
    <div className="container">
      <Header />
      <Addtask 
      taskList={taskList} 
      setTaskList={setTaskList}
      task={task}
      setTask={setTask} />
      <ShowTask 
      taskList={taskList}
      setTaskList={setTaskList}
      task={task}
      setTask={setTask}/>
    </div>
    </div>
  );
}

export default App;
