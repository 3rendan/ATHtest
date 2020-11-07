import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { getDes, getUrl }  from '../Calls'



  const Item = (param) => {
    const [item, setItem ] = useState([]);
    const [image, setImage ] = useState([]);
    let id = param.match.params.id;
    useEffect(() => {
      axios.get('http://digital.provath.org/api/items/' + id)
      .then(res => { setItem(res.data) })
      .catch(error => console.error(error))
    }, [])
    useEffect(() => {
    	axios.get('http://digital.provath.org/api/files/' + id)
    	.then(res => { setImage(res.data) })
    	.catch(error => console.error(error))
    }, [])

    // g etUrl(images, item.id)
    return (

      <div>
        <h1>{item.element_texts && item.element_texts[0].text }</h1>
        { console.log(image.file_urls && image.file_urls.square_thumbnail) }
        <img src={ image.file_urls && image.file_urls.square_thumbnail }
        alt="nothing"/>
      </div>
    )
  }
  export default Item
