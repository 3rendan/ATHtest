import React, { createContext, useState, useEffect } from "react"
import axios from 'axios'
const ItemsContext = createContext()

export const ItemsProvider =({children}) => {
    const [ items, setItems ] = useState([])
    const [ images, setImages ] = useState([])
    const [ tags, setTags ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ imagesLoading, setImagesLoading ] = useState(true)
    const [ tagsLoading, setTagsLoading ] = useState(true)
    const archive = axios.create({
        baseURL: `https://digital.provath.org/api/`
    })

    useEffect(() => {
        getItems()
        getImages()
        getTags()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   
    const getItems = async () => {
        try {
            const res = await archive.get(`items`);
            setItems(res.data)
            setIsLoading(false)
        } catch (err) {
            console.error(err)
        }
    } 

    const getImages = async () => {
        try {
            const res = await archive.get(`files`);
            setImages(res.data)
            setImagesLoading(false)
        } catch (err) {
            console.error(err)
        }
    }
    
    const getTags = async () => {
        try {
            const res = await archive.get(`tags`);
            setTags(res.data)
            setTagsLoading(false)
        } catch (err) {
            console.error(err)
        }
    }

    return <ItemsContext.Provider value={{
        items,
        images,
        isLoading,
        imagesLoading,
        tags,
        tagsLoading,
    }}>
        { children }
    </ItemsContext.Provider>
}
export default ItemsContext