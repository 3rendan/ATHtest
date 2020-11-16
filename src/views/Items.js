import React from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from '../services/useFetch';
import Item from './Item'
import App from '../App'
// import myStyles from '../style/Main'


const Items = (props) => {
  const { data: items, loading, error } = useFetch('items');
  return (
    <div className="row col-md-10 offset-md-1">
  		{ items.map(item => {
  			return  (
  					<div key={item.id} className="card text-center">
  					<Link to={`item/${item.id}`} item={item}>
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
