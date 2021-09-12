import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'


const Dwnlds = (props) => {
  return (
    <Router>
    <div>
      <Link to="/public/downloads/PA-1853-01.jpeg" target="_blank" rel="image" download="PA-1853-01.jpeg"><button>Download JPEG</button></Link>
      <h1>Citation</h1>
    </div>
    </Router>

  )
}

export default Dwnlds
