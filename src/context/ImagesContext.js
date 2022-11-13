import React, { createContext, useState, useEffect } from "react"
import {baseUrl} from '../constants'

const ImagesContext = createContext()

export const ImagesProvider =({children}) => {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ images, setImages ] = useState([])

    useEffect(() => {
        fetchImages()
    }, [])

    const fetchImages = async () => {
        const response = await fetch(baseUrl + 'files');
        const data = await response.json()
        setImages(data)
        setIsLoading(false)
    }


    return <ImagesContext.Provider value={{
        images,
        isLoading
    }}>
        { children }
    </ImagesContext.Provider>
}
export default ImagesContext