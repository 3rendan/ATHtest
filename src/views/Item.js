import React, { useEffect, useState } from 'react';
import useFetch from '../services/useFetch';
import Spinner from '../components/Spinner';
import { getCollection } from '../services/global';
import Tombstone from '../components/Tombstone'
// import myStyles from '../style/Main'


  const Item = (props) => {
    const { data: item, loading, error } = useFetch('items/' + props.match.params.id);
    const [ collection, setCollection ] = useState([]);
    if (error) throw error;
    if (loading) return <Spinner />;
    return (
      <section>
        <h3>{ item.element_texts[0].text }</h3>
        <h5>Sculpture</h5>
        <Tombstone item={item} className='col-sm-5' />


      </section>
    )
  }
  export default Item
