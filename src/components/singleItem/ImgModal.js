import React, { useState } from 'react'
import useItemImage from '../../hooks/useItemImage'
import ProgressBar from '../../services/ProgressBar'
import Modal from './Modal'

const ImgModal = (props) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const res = useItemImage(props.id)
  const image = res.image

  if(!isOpen) return null
  if (res.loading) return <ProgressBar />
  return (
    <div>
      <img className='img-modal' src={ image.file_urls.fullsize } alt={props.title} image={ image.file_urls.fullsize }/>
      
    </div>
  )
}
export default ImgModal
