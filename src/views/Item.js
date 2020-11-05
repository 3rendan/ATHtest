import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import { useItem, ggetUrl }  from '../Calls'

  const Item = (param) => {
    const [item, setItem ] = useState([]);
    const [images, setImages ] = useState([]);
    let id = param.match.params.id;
    useEffect(() => {
      axios.get('http://digital.provath.org/api/items/' + id)
      .then((res) => { setItem(res.data) })
      .catch(error => console.error(error))
    }, [])
    useEffect(() => {
    	axios.get('http://digital.provath.org/api/files')
    	.then((res) => { setImages(res.data) })
    	.catch(error => console.error(error))
    }, [])

    // g etUrl(images, item.id)
    return (

      <div>
        <h1>{item.id}</h1>
        <img src={
          pic  = ggetUrl(images, item.id);
          console.log(pic);
        }
        alt="nothing"/>
      </div>
    )
  }
  export default Item
