import React from 'react';
import axios from 'axios';


export const useItems = () => {
  axios.all([
    axios.get('http://digital.provath.org/api/items'),
    axios.get('http://digital.provath.org/api/files')
  ])
  .then(res => {
    this.setState({ items: res[0].data, images: res[1].data })
  })
  .catch(error => console.error(error))
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
