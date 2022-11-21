import React from 'react'
import { Link } from 'react-router-dom'
import CardBrowse from '../../style/browse/CardBrowse'
import Bars from '../../services/Bars'
import useItemImage from '../../hooks/useItemImage'

const BrowseItem = (props) => {
    const res = useItemImage(props.item.id)
    const image = res.image

    if (res.loading) return <Bars />

    return  (
        <CardBrowse>
            <Link to={`item/${props.item.id}`}>           
            <section className='card-body'>
            <img
                className='square'
                src={ image.file_urls.square_thumbnail }
                alt={props.item.element_texts[0].text} />
                <h6>{props.item.element_texts[0].text}</h6>
            </section>
            </Link>
        </CardBrowse>
    )
}
export default BrowseItem