import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('http://digital.provath.org/api/items')
      .then((res) => setItems(res.data))
      .catch(error => console.error(error))
    }, [])
  console.log(items);
  return items;
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

  export { useItem, useItems }
