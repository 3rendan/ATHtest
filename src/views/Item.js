import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { getDes, getUrl }  from '../Calls'



  const Item = (param) => {
    const [item, setItem ] = useState([]);
    const [images, setImages ] = useState([]);
    let id = param.match.params.id;
    useEffect(() => {
      axios.get('http://digital.provath.org/api/items/' + id)
      .then(res => { setItem(res.data) })
      .catch(error => console.error(error))
    }, [])
    useEffect(() => {
    	axios.get('http://digital.provath.org/api/files')
    	.then((res) => { setImages(res.data) })
    	.catch(error => console.error(error))
    }, [])
    const gus  = item.element_texts;
    // g etUrl(images, item.id)
    return (

      <div>
        <h1>{item.element_texts && item.element_texts[0].text }</h1>
        { item.element_texts && console.log(getDes(gus, "Description"))}
        <img src={ id }
        alt="nothing"/>
      </div>
    )
  }
  export default Item
