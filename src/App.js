import './App.css';
import studentData from './Data';
import Students from './Components/Students';
import React, { useState } from 'react';

function App() {
  const [studentInfo, setStudentInfo] = useState(studentData);
  //console.log(studentInfo);
  return (
    <div className="App">
      {studentInfo.map((students) => {
        return (
          <Students
            key={students.name}
            name={students.name}
            bio={students.bio}
            scores={students.scores}
          />
        );
      })}
    </div>
  );
}

export default App;
