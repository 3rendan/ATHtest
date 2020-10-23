import React, { useEffect, useState } from 'react';
import axios from 'axios';


// export const useItems = () => {
//   useEffect(() =>{
//     axios('http://digital.provath.org/api/items')
//     .then(res => { this.setState({ items: res })})
//     .catch(error => console.error(error))
//   })
// }

export const useItem = (param) => {
  const [item, setItem] = useState([]);
  useEffect(() =>{
    axios.get(`https://digital.provath.org/api/items/` + 33)  //if you use a num with corresponding id an object is returned
      .then(res => setItem(res))
      .then(res => console.log(res))
      .catch(error => console.error(error))
    }, [])
    return item;
  }
