import React, { Component } from 'react'
import axios from 'axios';
//import BrowseImage from '../components/BrowseImage'
import { Link } from "react-router-dom";
import { useItems } from '../Calls';

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
  console.log(useItems());
  console.log(items)
  // console.log(images)
  return (
    
    )
  }
export default Items;
