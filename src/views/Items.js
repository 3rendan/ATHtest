import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from '../services/useFetch';
import Spinner from '../components/Spinner';
import Style from '../style/CardBrowse'

// import myStyles from '../style/Main'


const Items = (props) => {
  const { data: items, loading, error } = useFetch('items');
  const { data: images } = useFetch('files');
  console.log(images)
  const [ url, setUrl] = useState([]);



  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <div className="row col-md-10 offset-md-1">
  		{ items.map(item => {
  			return  (
  					<div key={item.id} className="card">
  					<Link to={`item/${item.id}`}>
            <img
            className='image-top'
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yeMID4Q_2H8Ya1kTIQxPDAHaHa%26pid%3DApi&f=1'
            style={{ width: '33rem'}}
             alt={item.element_texts[0].text} />
  					 <Style>
  						 <h5>{item.element_texts[0].text}</h5>
  						</Style>
  						</Link>
  						</div>
  				)})
  			}
  		</div>
  	)
  }

  export default Items;
