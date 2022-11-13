import React, { useContext } from 'react'
import ItemsContext from '../../context/ItemsContext'
import Bars from '../../services/Bars'

export default function SingleImage(props) {
    const { images, imagesLoading } = useContext(ItemsContext)
    if (imagesLoading) return <Bars />
    return (
        <>
        { target = images.filter(image => image.item.id === props.item.id)}
            <img
            className='single-item'
            src={ console.log(target)}
            alt={props.item.element_texts[0].text} />
        </>
    )
}
