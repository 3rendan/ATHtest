import React, { useContext } from 'react'
import getCollection from '../../services/getCollection'
import Board from '../../style/browse/Board'
import Bars from '../../services/Bars'
import ItemsContext from '../../context/ItemsContext'
import BrowseItem from './BrowseItem'

export default function Collection(props) {
    const { items, isLoading } = useContext(ItemsContext)
    const id = parseInt(props.match.params.id)
    const collectionItems = items.filter((item) => item.collection.id === id)
    
    if (isLoading) return <Bars />
    return (
        <>
            <h1>{ getCollection(id)} </h1>
            <Board>
            { collectionItems.map(item => {
  			return  (
                <BrowseItem item={item} />
            )})}
            </Board>   
        </>
    )
}
