import React, { useState, useEffect } from 'react';
import useImages from '../services/useImages';


const SqImg = (props) => {
  const { images } = useImages();
  const [ url, setUrl ] = useState([]);
  // console.log(props.match.params.id)

  useEffect(() => {
    const picture  = images.find(image => (image.item.id === props.match.params.id));
    setUrl(picture);
  }, [])
  return (
      <div>
        <img
        src={ url }
        alt='hello' />
      </div>
    )
  }

export default SqImg;
