import React from 'react'
import ProgressBar from '../../services/ProgressBar'
import { useParams } from 'react-router-dom'
import useItemImage from '../../hooks/useItemImage'

const ItemImg = (props) => {
  const { id } = useParams()
  const res = useItemImage(id)
  const image = res.image
  console.log(image)

  if (res.loading) return <ProgressBar />
  
  return (
    <div className='grid-item-2'>
      <img src={image.file_urls.square_thumbnail} alt={props.title}/>
    </div>
  )
}

export default ItemImg
