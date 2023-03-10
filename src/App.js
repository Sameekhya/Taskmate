import React, { useState ,useEffect} from "react";
import Header from "./Components/Header";

import Addtask from "./Components/Addtask";
import ShowTask from "./Components/ShowTask";

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
    
  }, [taskList])
  

  return (
    <div className="App">
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
  );
}

export default App;
