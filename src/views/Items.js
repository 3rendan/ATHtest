import React, { useState } from 'react'
import { Link } from "react-router-dom"
import useFetch from '../services/useFetch'
import Spinner from '../components/Spinner'
import Style from '../style/CardBrowse'
import { getUrl } from '../services/global'


// import myStyles from '../style/Main'


const Items = (props) => {
  const { data: items, loading, error } = useFetch('items');
  const { data: images } = useFetch('files');
  console.log(items)
  const [ url, setUrl] = useState([]);



  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <Style className="single-browse">
  		{ items.map((item) => {
  			return  (
  					<div key={item.id} className="card card-browse" style={{width: '30%'}}>
  					<Link to={`item/${item.id}`} item={item}>
            <img
            className='image-top'
            src={ images.find(image => getUrl(image, item.id))}
            alt={item.element_texts[0].text} />
  					 <Style>
  						 <h5>{item.element_texts[0].text}</h5>
  						</Style>
  						</Link>
  						</div>
  				)})
  			}
  		</Style>
  	)
  }

  export default Items;
