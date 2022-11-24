import React from 'react'
import useItemImage from '../../hooks/useItemImage'
import ProgressBar from '../../services/ProgressBar'

const ImgModal = (props) => {
  const res = useItemImage(props.id)
  const image = res.image

  if (res.loading) return <ProgressBar />
  return (
    <div>
      <img className='img-modal' src={ image.file_urls.fullsize } alt={props.title} image={ image.file_urls.fullsize }/>    
    </div>
  )
}
export default ImgModal
