import React, { useState } from 'react'
import { Link } from "react-router-dom"
import useFetch from '../services/useFetch'
import Spinner from '../components/Spinner'
import Board from '../style/Board'
import { getUrl } from '../services/global'
import CardBrowse from '../style/CardBrowse'


// import myStyles from '../style/Main'


const Items = (props) => {
  const { data: items, loading, error } = useFetch('items');
  const { data: images } = useFetch('files');
  console.log(items)
  const [ url, setUrl] = useState([]);



  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <Board>
  		{ items.map((item) => {
  			return  (
  					<Link to={`item/${item.id}`} item={item}>
  					<CardBrowse key={item.id} className='card'>
              <img
                className='image-top square'
                src={ (images.find(image => (image.item.id === item.id))).file_urls.square_thumbnail}
                alt={item.element_texts[0].text} />
              <div className='card-body'>
                <h6>{item.element_texts[0].text}</h6>
  					  </div>
  					  </CardBrowse>
  					</Link>
  				)})
  			}
  		</Board>
  	)
  }

  export default Items;
