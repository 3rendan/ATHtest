import React, { useEffect, useState } from 'react';
import axios from 'axios';


// export const useItems = () => {
//   useEffect(() =>{
//     axios('http://digital.provath.org/api/items')
//     .then(res => { this.setState({ items: res })})
//     .catch(error => console.error(error))
//   })
// }

const useItem = (param) => {
  const [item, setItem] = useState([]);
  //console.log(param.id)
  useEffect(() =>{
    axios.get(`http://digital.provath.org/api/items/`)  //if you use a num with corresponding id an object is returned
      .then(res => setItem(res))
      .catch(error => console.error(error))
    }, [])
    console.log(item)
    return item;
  }
export default useItem
