import React, { useState } from 'react';
import getCollection from '../services/getCollection'
import useFetch from '../services/useFetch'
import Modal from '../components/singleItem/Modal'
import Tombstone from '../components/singleItem/Tombstone'
import ItemTags from '../components/singleItem/ItemTags'
import Dwnlds from '../components/singleItem/Dwnlds'
import ItemImg from '../components/singleItem/ItemImg'
import MobileImg from '../components/singleItem/MobileImg'
import Socials from '../components/singleItem/Socials'
import TombstoneImg from '../style/singleItem/TombstoneImg'
import TagsDwnlds from '../style/singleItem/TagsDwnlds'
import Spinner from '../services/Spinner'

const Item = (props) => {

      <MobileImg  item={ item } images={ images }/>
      <TombstoneImg> {/* this will house image and tombstone in grid */}
        <Tombstone item={ item }/>
        <button className="img-modal" onClick={()=> setIsOpen(true) }><ItemImg item={ item } images={ images }/></button>
        <Modal open={ isOpen } onClose={ () => setIsOpen(false)} >
          { images.map((image) => {
            if(image.item.id === item.id){
              return (
                  <img
                  className='img-modal'
                  src={ image.file_urls.fullsize }
                  alt={item.element_texts[0].text}
                  image={ image.file_urls.fullsize }/>
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
