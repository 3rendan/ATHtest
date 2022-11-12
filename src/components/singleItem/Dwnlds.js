import React, { useState } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import Style from '../../style/singleItem/Dwnlds'
import Modal from './Modal'


const Dwnlds = (props) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const citeCategory = ['Creator', 'Title', 'Date', 'Host collection'];
  return (
    <Router>
      <Style>
        <div>
          <Link to="/public/downloads/PA-1853-01.jpeg" target="_blank" rel="image" download="PA-1853-01.jpeg"><button className="dwnld-btn">Download TIF</button></Link>
          <Link to="/public/downloads/PA-1853-01.jpeg" target="_blank" rel="image" download="PA-1853-01.jpeg"><button className="dwnld-btn">Download JPEG</button></Link>
          <button className="dwnld-btn" onClick={()=> setIsOpen(true) }>Citation</button>
          <Modal open={ isOpen } onClose={ () => setIsOpen(false)} >
          { props.item.element_texts.map((marcTag) =>{
            if(citeCategory.includes(marcTag.element.name)){
              return (
                <>
                  <p>{ marcTag.text.replace(/\s*<.*?>\s*/g, '') }</p>
                </>
            )
          }
          return null;
        }
        )}
        <p>Accessed on TODAY's DATE</p>
          </Modal>
        </div>
      </Style>
    </Router>
  )
}

export default Dwnlds
