import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { getDes, getUrl }  from '../Calls'
import Items from './Items'
import App from '../App'



  const Item = (props) => {
    const [item, setItem ] = useState([]);
    const [images, setImages ] = useState([]);
    useEffect(() => {
      axios.get('http://digital.provath.org/api/items/' + props.match.params.id)
      .then(res => { setItem(res.data) })
      .catch(error => console.error(error))
    }, [])
    useEffect(() => {
    	axios.get('http://digital.provath.org/api/files/')
    	.then(res => { setImages(res.data) })
    	.catch(error => console.error(error))
    }, [])
    // const properImg = getUrl(images.item.id, id);
    // g etUrl(images, item.id)
    return (

      <div>
        <h1>{ item.element_texts && item.element_texts[0].text }</h1>
        <h1>{ props.element_texts[0].text }</h1>
      </div>
    )
  }
  export default Item
