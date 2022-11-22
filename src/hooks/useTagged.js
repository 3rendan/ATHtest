import { useEffect, useState, useContext } from "react"
import ItemsContext from '../context/ItemsContext'

function useTagged(id) {
    const [ loading, setLoading ] = useState(true)
    const [ taggedItems, setTaggedItems ] = useState([])
    const { items } = useContext(ItemsContext)
    
    useEffect(() =>{
        const idInt = parseInt(id)
        setTaggedItems(items.filter(item => item.id > 45))
        setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 
    return { taggedItems, loading }
}
export default useTagged
