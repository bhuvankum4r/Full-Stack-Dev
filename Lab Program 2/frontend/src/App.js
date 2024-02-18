import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Student Details</h1>
      <div>
        {students.map((student, index) => (
          <div key={index}>
            <h2>Name: {student.name}</h2>
            <p>USN: {student.usn}</p>
            <p>Hobby: {student.hobby}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
