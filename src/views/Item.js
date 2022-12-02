import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useItem } from './hooks/useItem'
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
    const intId = parseInt(id)
    const item = useItem(intId)
    
    return (
        <>
        {console.log(item)}
        <h1>item</h1>
        </>
    )
}
export default Item