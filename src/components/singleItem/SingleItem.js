import React, { useEffect, useState } from 'react'
import Bars from '../../services/Bars'
import ItemImg from './ItemImg'

const SingleItem = (props) =>  {
    const [ item, setItem ] = useState({})
    const [ itemLoading, setItemLoading ] = useState(true)
    const fetchItem = async (id) => {
        const response = await fetch('https://digital.provath.org/api/items/' + id);
        const data = await response.json()
        setItem(data)
        setItemLoading(false)
    }  
    useEffect(() => {
        fetchItem(props.id)
    }, []) 
    
    if(itemLoading) return <Bars />
       
    return (
        <div>
            <h3>{ item.element_texts[0].text }</h3>
            
        </div>
  )
}
export default SingleItem

