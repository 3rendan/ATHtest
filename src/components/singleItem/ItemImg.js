import React, { useContext, useEffect } from 'react'
import ItemsContext from '../../context/ItemsContext'


const ItemImg = (props) => {
  const { images } = useContext(ItemsContext)
  
  const setImg = (id) =>{
    if(images.map(image => image.item.id === props.item.id)){
      return images.files_url.square_thumbnail
    }
  }

  return (
    <div className='grid-item-2'>
      <img
        className={ window.screen.width > 820 ? 'square' : 'm-single-image'}
        src={ props.src }
        alt={props.item.element_texts[0].text} />
    </div>
  )
}

export default ItemImg
