import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CardBrowse from '../../style/browse/CardBrowse'
import ItemsContext from '../../context/ItemsContext'
import Bars from '../../services/Bars'


const BrowseItem = (props) => {
    const { images, imagesLoading } = useContext(ItemsContext)
    if (imagesLoading) return <Bars />
    return  (
        <CardBrowse key={props.item.id}>
            <Link to={`item/${props.item.id}`}>           
            <section className='card-body'>
            <img
                className='square'
                src={ (images.find(image => (image.item.id === props.item.id))).file_urls.square_thumbnail }
                alt={props.item.element_texts[0].text} />
                <h6>{props.item.element_texts[0].text}</h6>
            </section>
            </Link>
        </CardBrowse>
    )
}

export default BrowseItem;