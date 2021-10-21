import React from 'react'

const MobileImg = (props) => {
  return (
  <div className='grid-item-2'>
  { props.images.map((image) => {
        if(props.item.collection.id === 1 && image.item.id === props.item.id){
          return (
              <img
              className='m-sculpture-item'
              src={ image.file_urls.fullsize }
              alt={props.item.element_texts[0].text}
              image={ image.file_urls.fullsize }/>
          )
        } else if(image.item.id === props.item.id){
          return (
              <img
              className='m-single-item'
              src={ image.file_urls.square_thumbnail }
              alt={props.item.element_texts[0].text}
              image={ image.file_urls.fullsize }/>
          )
        } else if(props.item.collection.id === 2 && image.item.id === props.item.id){
          return (
              <img
              className='m-single-item'
              src={ image.file_urls.fullsize }
              alt={props.item.element_texts[0].text}
              image={ image.file_urls.fullsize }/>
          )
        }
        return null
      })
    }

    </div>
)
}

export default MobileImg
