import React from 'react'
import { useParams } from 'react-router-dom'
import useItemImage from '../../hooks/useItemImage'
import ProgressBar from '../../services/ProgressBar'

const ItemImg = (props) => {
  const { id } = useParams()
  const res = useItemImage(id)
  const image = res.image

  if (res.loading) return <ProgressBar />
  
  return (
    <div className='frame'>
      <span className="helper"></span>
      <img className='tombstone-img' src={image.file_urls.square_thumbnail} alt={props.title} />
    </div>
  )
}

export default ItemImg
