import React from 'react'
import { Link } from "react-router-dom"
import useFetch from '../services/useFetch'
import Board from '../style/Board'
import CardBrowse from '../style/CardBrowse'
import Spinner from '../services/Spinner'




// import myStyles from '../style/Main'


const Items = (props) => {
  const { data: items, loading, error } = useFetch('items');
  const { data: images } = useFetch('files');
  


  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <Board>
  		{ items.map((item) => {
  			return  (
            <CardBrowse key={item.id}>
  					<Link to={`item/${item.id}`}>
                <img
                  className='image-top square'
                  src={ (images.find(image => (image.item.id === item.id))).file_urls.square_thumbnail }
                  alt={item.element_texts[0].text} />
                <section className='card-body'>
                  <h6>{item.element_texts[0].text}</h6>
                </section>
  					</Link>
            </CardBrowse>
  				)})
  			}
  		</Board>
  	)
  }

  export default Items;
