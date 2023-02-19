import React from 'react';
import './App.css';
import { AddStudent } from './features/student/AddStudent';
import {Student} from './features/student/Student';


function App() {
  return (
    <div className="App">
      <Student/>
      <AddStudent/>
    </div>
  );
}

export default App;
