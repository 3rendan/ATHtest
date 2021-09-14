import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import Style from '../style/Dwnlds'


const Dwnlds = (props) => {
  return (
    <Router>
      <Style>
        <div>
          <Link to="/public/downloads/PA-1853-01.jpeg" target="_blank" rel="image" download="PA-1853-01.jpeg"><button className="dwnld-btn">Download TIF</button></Link>
          <Link to="/public/downloads/PA-1853-01.jpeg" target="_blank" rel="image" download="PA-1853-01.jpeg"><button className="dwnld-btn">Download JPEG</button></Link>
          <Link to="/public/downloads/PA-1853-01.jpeg" target="_blank" rel="image" download="PA-1853-01.jpeg"><button className="dwnld-btn">Citation</button></Link>
        </div>
      </Style>
    </Router>
  )
}

export default Dwnlds
