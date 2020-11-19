import React, { useEffect, useState } from 'react';
import useFetch from '../services/useFetch';
import Spinner from '../components/Spinner';
import { getCollection } from '../services/imgServices';
import Tombstone from '../style/Tombstone'
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
        <Tombstone>
        </Tombstone>

      </section>
    )
  }
  export default Item
