import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState([])

  const getAllData = async () => {
    const response = await fetch('http://localhost:3000/read', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });    
      const res = await response.json();
      setData(res);

      console.log(res)

};

useEffect(() => {
  getAllData();
}, []);

  return (
   <>
     <div>
        {data.map((i) => (
          <div key={i._id}>
            <h1>{i.data}</h1>
          </div>
        ))}
      </div>
   </>
  )
}

export default App
