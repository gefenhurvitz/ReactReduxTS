import React from 'react';
import './App.css';
import { AddStudent } from './features/student/AddStudent';
import {Student} from './features/student/Student';


function App() {
  return (
    <div className="App">
      <AddStudent/>
      <Student/>
      
    </div>
  );
}

export default App;
