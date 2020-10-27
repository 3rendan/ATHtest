import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useItems = () => {
  const [items, setItems, images, setImages] = useState([]);
  useEffect(() => {
    axios.all([
      axios.get('http://digital.provath.org/api/items'),
      axios.get('http://digital.provath.org/api/files')
    ])
    .then(axios.spread((...res) => {
      console.log(res)
      setItems = res[0].data
      setImages = res[1].data
    }))
    .catch(error => console.error(error))
  }, [])
  return items, setItems, images, setImages;
}
const useItem = (param) => {
  const [item, setItem] = useState([]);
  useEffect(() =>{
    axios.get(`http://digital.provath.org/api/items/` + param)  //if you use a num with corresponding id an object is returned
      .then((res) => setItem(res.data))
      .catch(error => console.error(error))
    }, [])
    console.log(item)
    return item;
  }
  const getUrl = (plural, x) => {
    let obj  = plural.find(image => (image.item.id === x));
    return obj.file_urls.square_thumbnail;
  }

  export { useItem, useItems, getUrl }
