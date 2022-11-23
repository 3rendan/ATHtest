import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useItemImage from '../../hooks/useItemImage'
import ProgressBar from '../../services/ProgressBar'
import ImgModal from './ImgModal'

const ItemImg = (props) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const { id } = useParams()
  const res = useItemImage(id)
  const image = res.image

  if (res.loading) return <ProgressBar />
  
  return (
    <div className='frame'>
      <span className="helper"></span>
      <img src={image.file_urls.square_thumbnail} alt={props.title} className='single-item' onClick={()=> setIsOpen(true) } />
    </div>
  )
}

export default ItemImg
