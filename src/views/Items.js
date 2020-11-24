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
  					<CardBrowse key={item.id}>
              <img
                className='image-top'
                src={ 'http://digital.provath.org/items/show/70' }
                alt={item.element_texts[0].text} />
              <div className='card-body'>
                <h5>{item.element_texts[0].text}</h5>
  					  </div>
  					  </CardBrowse>
  					</Link>
  				)})
  			}
  		</Board>
  	)
  }

  export default Items;
