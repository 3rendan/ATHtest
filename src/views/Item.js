import React, { useEffect, useState } from 'react'
import { Tabs, Tab } from '@material-ui/core'
import useFetch from '../services/useFetch'
import { getCollection, getUrl } from '../services/global'
import Tombstone from '../components/Tombstone'
import Story from '../components/Story'
import Resources from '../components/Resources'
import Tag from '../components/Tag'

import Spinner from '../services/Spinner'

let born = false;

  const Item = (props) => {
    const { data: item, loading, error } = useFetch('items/' + props.match.params.id)
    const { data: images } = useFetch('files/')
    const [ collection, setCollection ] = useState([])
    const topics = ['Info', 'Story', 'Resources'] 
    const [selectedTab, setSelectedTab] = React.useState(0);
    const [pic, setPic] =  React.useState([]);
    useEffect(()=> {
      console.log('first')
    },[])
    useEffect(()=> {
      if(born){
        setPic(images.find((image)=> image.item.id === item.id))
      }  else {
        born = true;
      }
    })
 
    
  
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    
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
        <>
          <Tabs 
          value={selectedTab} 
          onChange={handleChange} 
          className='navbar'
          indicatorColor='#C4D425' 
          variant='fullWidth'
          aria-label='full width tabs example'>
            <Tab label={topics[0]}/>
            <Tab label={topics[1]}/>
            <Tab label={topics[2]}/>
          </Tabs>
          { selectedTab === 0 && <Tombstone item={item} /> }
          { selectedTab === 1 && <Story item={item}/> }
          { selectedTab === 2 && <Resources item={item} /> }
        </>
          <Tag item={item}/>
        </section>  
        <section>
        <img
            className='single-item'
            src={ console.log(pic.url) }
            alt={item.element_texts[0].text} />
        </section>

      </div>
      </div>

    )
  }
  export default Item
