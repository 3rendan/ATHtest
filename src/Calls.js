import React, { useEffect } from 'react';
import axios from 'axios';


export const useItems = () => {
  useEffect(() =>{
    axios('http://digital.provath.org/api/items')
    .then(res => { this.setState({ items: {res} })})
    .catch(error => console.error(error))
  })
}

// export const useItem = (param) => {
//   const [item, setItem] = useState([]);
//   useEffect(() =>{
//     fetch('http://localhost:2222/items/' + 3)
//     .then(response => response.json())
//     .then(data => setItem(data))
//     .catch(error => console.error(error))
//   }, [])
//   return item;
// }
