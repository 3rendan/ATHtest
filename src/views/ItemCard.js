import React, { useEffect, useState } from 'react';
import { getUrl } from '../services/imgServices';
import { Link } from 'react-router-dom';

export default function ImageCard(props) {
  const [ url, setUrl ] = useState([]);
  useEffect(() =>{
    getUrl(props.images, props.item.id).then((r) => setUrl(r));
  }, []);
  return (
    <section key={props.item.id} className="card text-center">
    <Link to={`item/${props.item.id}`}>
    { console.log(getUrl(images, props.item.id)) }
    <img
     src={ url }
     alt={props.item.element_texts[0].text} />
     <section className="card-body">
       <p>{props.item.element_texts[0].text}</p>
      </section>
      </Link>
      </section>
  )
}
