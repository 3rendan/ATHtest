import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { getDes, getUrl }  from '../Calls'



  const Item = (props) => {
    console.log(props.url)
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

        <h1>{item.element_texts && item.element_texts[0].text }</h1>
        {console.log(props.url)}

      </div>
    )
  }
  export default Item
