import { useEffect, useState } from "react"
import axios from 'axios'

function useItem(id) {
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ item, setItem ] = useState([])
    useEffect(() =>{
        const getItem = async () => {
            try {
                const res = await axios.get(`https://digital.provath.org/api/items/${id}`);
                const data = await res.data
                setItem(data)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }
        }
        getItem()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 
    return { item, loading, error}
}
export default useItem
