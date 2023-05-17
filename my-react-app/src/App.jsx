import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [date, setDate] = useState(new Date());

  function updateClock() {
    setDate(new Date());
  }

  useEffect(() => {
    setInterval(updateClock, 1000);
  });

  return (
    <>
      <div className="container">
        <div className="reloj">
          <p>{date.getHours()}</p>
          <p>{date.getMinutes()}</p>
          <p>{date.getSeconds()}</p>
        </div>
      </div>
    </>
  )
}

export default App
