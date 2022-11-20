import React, { useState, useEffect } from 'react'
import ItemsContext from '../context/ItemsContext'

const useItemImage = (itemId) => {
    const [ image, setImage ] = useContext(ItemsContext)
    images.map(image => image.item.id === props.item.id)
}
export default useItemImage
