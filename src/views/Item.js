import React from 'react'
import { useParams } from 'react-router-dom'
import useItem from '../hooks/useItem'
import Bars from '../services/Bars'
import ItemTitle from '../components/singleItem/ItemTitle'
import ItemImg from '../components/singleItem/ItemImg'
import MobileImg from '../components/singleItem/MobileImg'
import Tombstone from '../components/singleItem/Tombstone'
import ItemTags from '../components/singleItem/ItemTags'
import Dwnlds from '../components/singleItem/Dwnlds'
import Socials from '../components/singleItem/Socials'

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
        <div className="row">
            <div className="col-7">
                <Tombstone />
            </div>
            <div className="col-5">
                <ItemImg title={item.element_texts[0].text}/>
            </div>
        </div>
        <div className="row">
            <div className="col-7">
                <ItemTags item={item} />
            </div>
            <div className="col-5">
                <Socials />
                <Dwnlds item={item} /> 
            </div>
        </div>
    </>
    )
}
export default Item