import { useEffect, useState, useContext } from "react"
import ItemsContext from '../context/ItemsContext'

function useItemImage(id) {
    const [ loading, setLoading ] = useState(true)
    const [ image, setImage ] = useState([])
    const { images } = useContext(ItemsContext)
    
    useEffect(() =>{
        const idInt = parseInt(id)
        const url = images.find(image => image.item.id === idInt)
        setImage(url)
        setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 
    return { image, loading }
}
export default useItemImage
