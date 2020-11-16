import React from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from '../services/useFetch';
import Items from './Items'
import App from '../App'
import Spinner from '../components/Spinner'
// import myStyles from '../style/Main'


  const Item = (props) => {
    console.log(props.match.params.id)
    const { data: item, loading, error } = useFetch('items/' + props.match.params.id);
    if (error) throw error;
    if (loading) return <Spinner />;
    return (

      <div>
        <h1>{ item.element_texts[0].text }</h1>
      </div>
    )
  }
  export default Item
