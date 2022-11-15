import React, { useContext, useState, useEffect } from 'react'
import ItemsContext from '../../context/ItemsContext'


const ItemImg = (props) => {
  const { images } = useContext(ItemsContext)
  const findImage = (num, obj) => {
    obj.map((arr) => {
      arr.find(img => img.item.id === num)
    })
  }

  return (
    <div className='grid-item-2'>
      <img
                className='square'
                src={ findImage(props.item.id, images).file_urls.square_thumbnail }
                alt={props.item.element_texts[0].text} />
                <h6>{props.item.element_texts[0].text}</h6>
    </div>
  )
}

export default ItemImg
