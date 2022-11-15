import React, { createContext, useState, useEffect } from "react"
const ItemsContext = createContext()

export const ItemsProvider =({children}) => {
    const [ items, setItems ] = useState([])
    const [ images, setImages ] = useState([])
    const [ tags, setTags ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ imagesLoading, setImagesLoading ] = useState(true)
    const [ tagsLoading, setTagsLoading ] = useState(true)

    useEffect(() => {
        fetchItems()
        fetchImages()
        fetchTags()
    }, [])

    const fetchItems = async () => {
        const response = await fetch('items');
        const data = await response.json()
        setItems(data)
        setIsLoading(false)
    }   
    const fetchImages = async () => {
        const response = await fetch('files');
        const data= await response.json()
        setImages(data)
        setImagesLoading(false)
    }
    const fetchTags = async () => {
        const response = await fetch('tags');
        const data= await response.json()
        setTags(data)
        setTagsLoading(false)
    }

    return <ItemsContext.Provider value={{
        items,
        images,
        isLoading,
        imagesLoading,
        tags,
        tagsLoading
    }}>
        { children }
    </ItemsContext.Provider>
}
export default ItemsContext