import { useEffect, useState } from "react"
import axios from 'axios'

function useItemImage(id) {
    const [ loading1, setLoading1 ] = useState(true)
    const [ image, setImage ] = useState([])
    const [ error, setError ] = useState(null)

    useEffect(() =>{
        const getImage = async () => {
            try {
                const res = await axios.get(`https://digital.provath.org/api/files`);
                const images = await res.data
                // This returns an object when id is hardcoded
                const imageObject = await images.find(image => image.item.id === id)
                setImage(imageObject)
                setLoading1(false)
            } catch (err) {
                setError(err)
                setLoading1(false)
            }
        }
        getImage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 
    return { image, loading1, error }
}
export default useItemImage
