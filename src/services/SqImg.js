import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const SqImg = (props) => {
  const { id } = useParams();
  const [ url, setUrl ] = useState([]);

  console.log(url)
  return (
      <div>
        <img
        src={ url }
        alt='hello' />
      </div>
    )
  }

export default SqImg;
