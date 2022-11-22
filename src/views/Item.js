import React from 'react'
import { useParams } from 'react-router-dom'
import useItem from '../hooks/useItem'
import Bars from '../services/Bars'
import ItemTitle from '../components/singleItem/ItemTitle'
import ItemImg from '../components/singleItem/ItemImg'
import MobileImg from '../components/singleItem/MobileImg'
import Tombstone from '../components/singleItem/Tombstone'

const Item = () =>  {
    const { id } = useParams()
    const res = useItem(id)
    const item = res.item


    if (res.loading) return <Bars />
    
    return (
    <>
        <ItemTitle item={item}/>
        {/* Image that appears on mobile devices */}
        <MobileImg title={item.element_texts[0].text} />
        <div className="col-6">
            <Tombstone />
        </div>
        <div className="col-4">
            <ItemImg title={item.element_texts[0].text}/>
        </div>
        <div className="socials">
            
        </div>
    </>
    )
}
export default Item