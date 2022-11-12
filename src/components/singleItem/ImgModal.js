import React, { useState } from 'react'
import Modal from './Modal'

const ImgModal = (props) => {
  const [ isOpen, setIsOpen ] = useState(false)
  return (
    <div>
    <Modal open={ isOpen } onClose={ () => setIsOpen(false)} >
      { props.images.map((image) => {
        if(image.item.id === props.item.id){
          return (
              <img
              className='img-modal'
              src={ image.file_urls.fullsize }
              alt={props.item.element_texts[0].text}
              image={ image.file_urls.fullsize }/>
            )
          }
          return null
        })
        }
    </Modal>
    </div>
  )
}

export default ImgModal
