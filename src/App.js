import React, { useState }  from 'react';
import Header from './Components/Header';

import Addtask from './Components/Addtask';
import ShowTask from './Components/ShowTask';


function App() {

const [taskList,setTaskList] = useState([]);

console.log("in app ",taskList)
  return (
    <div className="App">
      <Header/>
      <Addtask taskList={taskList} setTaskList={setTaskList}/>
      <ShowTask taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
