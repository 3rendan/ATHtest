import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import { useItem, useItems }  from '../Calls'
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
  let items =  useItems();
  // const getUrl = (x) => {
  //   let obj  = images.find(image => (image.item.id === x));
  //   return obj.file_urls.square_thumbnail;
  // }
  return (
    <div className="row col-md-10 offset-md-1" style={cardBrowse}>
      { items.map(item => {
        return  (
            <div key={item.id} className="card text-center" style={singleBrowse}>
            <Link to={`item/${item.id}`} item={item}>
             <img
             style={imgBrowse}

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
