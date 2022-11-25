import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Bars from '../services/Bars'
import ItemTitle from '../components/singleItem/ItemTitle'
import ItemImg from '../components/singleItem/ItemImg'
import MobileImg from '../components/singleItem/MobileImg'
import Tombstone from '../components/singleItem/Tombstone'
import ItemTags from '../components/singleItem/ItemTags'
import Dwnlds from '../components/singleItem/Dwnlds'
import Socials from '../components/singleItem/Socials'
import ItemsContext from '../context/ItemsContext'

const Item = () =>  {
    const { id } = useParams()
    const { items, isLoading } = useContext(ItemsContext)
    const [ archiveItem, setArchiveItem ] = useState({})

    const intId = parseInt(id)
    useEffect(() =>{
        const storedItem = localStorage.getItem('stored-item')
        const getArchiveItem = () => {
            if(storedItem !== null){
                setArchiveItem(JSON.parse(storedItem))
            } else {
                setArchiveItem(items.find(item => item.id === intId))
            }
        }
        getArchiveItem() 
        return () => {
            localStorage.removeItem('stored-item')
        } 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })
    useEffect(() => {
        localStorage.setItem('stored-item', JSON.stringify(archiveItem))
    }, [archiveItem])


    if (isLoading) return <Bars />
    
    return (
    <>
    {console.log(archiveItem)}
        <ItemTitle item={archiveItem}/>
        {/* Image that appears on mobile devices */}
        <MobileImg title={archiveItem.element_texts[0].text} />
        <div className="row">
            <div className="col-7">
                <Tombstone />
            </div>
            <div className="col-5">
                <ItemImg title={archiveItem.element_texts[0].text}/>
            </div>
        </div>
        <div className="row">
            <div className="col-7 item-tags">
                <ItemTags item={archiveItem} />
            </div>
            <div className="col-5">
                <Socials />
                <Dwnlds item={archiveItem} /> 
            </div>
        </div>
    </>
    )
}
export default Item