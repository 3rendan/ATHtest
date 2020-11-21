import React, { useEffect, useState } from 'react'
import useFetch from '../services/useFetch'
import Spinner from '../components/Spinner'
import { getCollection } from '../services/global'
import Tombstone from '../components/Tombstone'
import NavTabs from '../components/NavTabs'
// import myStyles from '../style/Main'


  const Item = (props) => {
    const { data: item, loading, error } = useFetch('items/' + props.match.params.id)
    const [ collection, setCollection ] = useState([])
    const topics = ['Info', 'Story', 'Resources']
    if (error) throw error;
    if (loading) return <Spinner />;
    return (
      <section  className='col-sm-5'>
        <h3>{ item.element_texts[0].text }</h3>
        <h5>{ getCollection(item.collection.id)}</h5>
        <NavTabs topics={topics}/>
        <Tombstone item={item} />
      </section>
    )
  }
  export default Item
