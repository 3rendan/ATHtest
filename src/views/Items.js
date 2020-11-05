import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import { useItem, getUrl }  from '../Calls'
import Item from './Item'

//import BrowseImage from '../components/BrowseImage'
// import { useItems } from '../Calls';

const imgBrowse = {
  maxWidth: '99%',
  margin: 'auto'
};
const cardBrowse = {
  display: 'flex',
  justifyContent: 'space-around'
};
const singleBrowse = {
  flexBasis: '20%',
  margin: '10px',
  border: '1px #000 solid',
  padding: '5px',
}
const Items = () => {
  const [items, setItems ] = useState([]);
  const [images, setImages ] = useState([]);
  useEffect(() => {
    axios.get('http://digital.provath.org/api/items')
    .then((res) => { setItems(res.data) })
    .catch(error => console.error(error))
  }, [])
  useEffect(() => {
    axios.get('http://digital.provath.org/api/files')
    .then((res) => { setImages(res.data) })
    .catch(error => console.error(error))
  }, [])
  // console.log(images)
  // console.log(items)


  return (
    <div className="row col-md-10 offset-md-1" style={cardBrowse}>
  		{ items.map(item => {
  			return  (
  					<div key={item.id} className="card text-center" style={singleBrowse}>
  					<Link to={`item/${item.id}`} item={item}>
  					 <img
  					 style={imgBrowse}
             src={ getUrl(images, item.id) }
  					 alt={item.element_texts[0].text} />
  					 <div className="card-body">
  						 <p>{item.element_texts[0].text}</p>
  						</div>
  						</Link>
  						</div>
  				)})
  			}
  		</div>
  	)
  }

  export default Items;
