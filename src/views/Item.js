import React, { useState } from 'react';
import getCollection from '../services/getCollection'
import useFetch from '../services/useFetch'
import Modal from '../components/Modal'

import Tombstone from '../components/Tombstone'
import ItemTags from '../components/ItemTags'
import Dwnlds from '../components/Dwnlds'
import ItemImg from '../components/ItemImg'
import Socials from '../components/Socials'


import TombstoneImg from '../style/TombstoneImg'
import TagsDwnlds from '../style/TagsDwnlds'
import Spinner from '../services/Spinner'


const Item = (props) => {
    const { data: item, loading, error } = useFetch('items/' + props.match.params.id)
    const { data: images } = useFetch(`files`)
    const [ isOpen, setIsOpen ] = useState(false)
    if (error) throw error;
    if (loading) return <Spinner />;
    return (
      <div className='container'>
      <section>  {/* title and collection row */}
        <h3>{ item.element_texts[0].text }</h3>
        <h5>{ getCollection(item.collection.id) }</h5>
      </section>
      <TombstoneImg> {/* this will house image and tombstone in grid */}
        <Tombstone item={ item }/>
        <button className="img-modal" onClick={()=> setIsOpen(true) }><ItemImg item={ item } images={ images }/></button>
        <Modal open={ isOpen } onClose={ () => setIsOpen(false)} images={ images } item={ item }>
        { images.map((image) => {
          if(image.item.id === item.id){
            return (
                <img
                src={ image.file_urls.fullsize }
                alt={item.element_texts[0].text}
                />
              )
            }
            return null
          })
        }
        </Modal>
      </TombstoneImg>
      <div className='socials'>
        <h1>Tags</h1>
        <Socials />
      </div>
      <TagsDwnlds>
        <ItemTags item={ item }/>
        <Dwnlds item={ item }/>
      </TagsDwnlds>
      </div>
    )
  }
  export default Item
