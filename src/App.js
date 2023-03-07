import React from 'react';
import Header from './Components/Header';
import ShowTask from './Components/ShowTask'; 
import Addtask from './Components/Addtask';

function App() {


  return (
    <div className="App">
      <Header/>
      <Addtask />
      <ShowTask/>
    </div>
  );
}

export default App;
