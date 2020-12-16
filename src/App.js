import React, { useState } from 'react'
import './App.css'
const url = 'https://course-api.netlify.app/api/react-tours-project'

function App() {
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <h1>Our Tours</h1>
    </div>
  )
}

export default App