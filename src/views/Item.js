import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

const useItem = (param) => {
  const [item, setItem] = useState([]);
  console.log(item)
  useEffect(() =>{
    axios.get('https://digital.provath.org/api/items/' + item.id)
      .then(data => setItem(data))
      .catch(error => console.error(error))
    }, [])
    return item;
  }

  const Item = () => {
    const item = useItem();
    console.log(item)
    return (
      <div>
        <h1> single item</h1>
      </div>
    )
  }
  export default Item
