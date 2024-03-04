import { useState } from 'react'
import './App.css'

function App() {
  const [students,setStudents]=useState([])

  const studentdetail=async()=>{
     const res=await fetch('http://localhost:3000/studentdetails',{
        method:'GET',
        headers:{
          'content-type':'application/json'
        }
      })
      const data=await res.json();
      setStudents(data)
      
  }

 studentdetail()
  
  // console.log(students)
 
  return (
    <div className="container">
    <h1 className="mt-4 mb-4">Student Dashboard</h1>
    <div className="row">
      {students.map((student, index) => (
        <div key={index} className="col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{student.name}</h5>
              <p className="card-text">USN: {student.usn}</p>
              <p className="card-text">Hobbie: {student.hobbie}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div> 
  )
}

export default App
