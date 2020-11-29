import React, { useEffect, useState } from 'react'
import useFetch from '../services/useFetch'
import Spinner from '../components/Spinner'
import { getCollection } from '../services/global'
import Tombstone from '../components/Tombstone'
import Tags from '../components/Tags'
import NavTabs from '../components/NavTabs'



  const Item = (props) => {
    const { data: item, loading, error } = useFetch('items/' + props.match.params.id)
    const [ collection, setCollection ] = useState([])
    // const { data: images, loading, error } = useFetch('files/');
    const topics = ['Info', 'Story', 'Resources']
    if (error) throw error;
    if (loading) return <Spinner />;
    return (
      <div className='container'>
      <section>
        <h3>{ item.element_texts[0].text }</h3>
        <h5>{ getCollection(item.collection.id) }</h5>
      </section>
      <div className='grid'>
        <section>
          <NavTabs topics={topics}/>
          <Tombstone item={item} />
          <Tags item={item}/>
        </section>  
        <section>
        <img
          className='single-item'
          src='http://digital.provath.org/files/fullsize/8ceebec5ab3c3eb0d53d2a91560d8096.jpg'
          alt={item.element_texts[0].text} />
        </section>
      </div>
      </div>

    )
  }
  export default Item
