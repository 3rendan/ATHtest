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
  useEffect(() =>{
    axios.get(`http://digital.provath.org/api/items/` + param)  //if you use a num with corresponding id an object is returned
      .then((res) => setItem(res.data))
      .catch(error => console.error(error))
    }, [])
    console.log(item)
    return item;
  }
export default useItem;
