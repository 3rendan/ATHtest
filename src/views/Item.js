import React from 'react'
import { useParams } from 'react-router-dom'
import useItem from '../hooks/useItem'
import Bars from '../services/Bars'
import ItemTitle from '../components/singleItem/ItemTitle'
import ItemImg from '../components/singleItem/ItemImg'

const Item = () =>  {
    const { id } = useParams()
    const res = useItem(id)
    const item = res.item


    if (res.loading) return <Bars />
    
    return (
    <>
        <ItemTitle item={item}/>
        <ItemImg title={item.element_texts[0].text}/>
    </>
    )
}
export default Item