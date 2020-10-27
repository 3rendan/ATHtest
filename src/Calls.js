import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';


const useItem = (param) => {
  const [item, setItem] = useState([]);
  useEffect(() =>{
    axios.get(`http://digital.provath.org/api/items/` + param)  //if you use a num with corresponding id an object is returned
      .then((...res) => setItem(res.data))
      .catch(error => console.error(error))
    }, [])
    console.log(item)
    return item;
  }
  const getUrl = (plural, x) => {
    let obj  = plural.find(image => (image.item.id === x));
    return obj.file_urls.square_thumbnail;
  }

  export { useItem, getUrl }
