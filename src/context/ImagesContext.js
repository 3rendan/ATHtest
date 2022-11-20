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
        const response = await fetch('https://digital.provath.org/api/files');
        const data = await response.json()
        setImages(data)
        setIsLoading(false)
    }


    return <GlobalContext.Provider value={{
        images,
        isLoading
    }}>
        { children }
    </GlobalContext.Provider>
}
export default ImagesContext