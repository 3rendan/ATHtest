import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import { useItem, useItems, getUrl }  from '../Calls'
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
  useItems();

  return (
    <div className="row col-md-10 offset-md-1" style={cardBrowse}>
      <h1>items</h1>
      </div>
    )
  }

  export default Items;
