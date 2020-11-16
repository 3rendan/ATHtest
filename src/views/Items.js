import React from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from '../services/useFetch';
import useImages from '../services/useImages';
import Item from './Item'
import Spinner from '../components/Spinner';
import SqImg from '../services/SqImg'
// import myStyles from '../style/Main'


const Items = (props) => {
  const { data: items, loading, error } = useFetch('items');
  const { images } = useImages();
  console.log(images)
  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <div className="row col-md-10 offset-md-1">
  		{ items.map(item => {
  			return  (
  					<div key={item.id} className="card text-center">
  					<Link to={`item/${item.id}`}>
            <SqImg/>
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
