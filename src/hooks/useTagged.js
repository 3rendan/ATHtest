import { useEffect, useState, useContext } from "react"
import ItemsContext from '../context/ItemsContext'

function useTagged(tagId) {
    const [ loading, setLoading ] = useState(true)
    const [ taggedItems, setTaggedItems ] = useState([])
    const [ tagName, setTagName ] = useState([])
    const { items } = useContext(ItemsContext)
    
    useEffect(() =>{
        const idInt = parseInt(tagId)
        const taggedItems = () => {
            let arr = []
            let tagName = ''
            const tagged = (element) => element === idInt
            items.forEach(item => {
                item.tags.forEach(tagElement => {
                    const { id, name } = tagElement
                    if(tagged(id)){
                        arr.push(item)
                        tagName = name
                    } 
                })
                return [arr, tagName]
            })              
            return [arr, tagName]
        }
        setTaggedItems(taggedItems()[0])
        setTagName(taggedItems()[1])
        setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 
    return { taggedItems, loading, tagName }
}
export default useTagged
