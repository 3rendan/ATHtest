import React from 'react'
import { Link } from "react-router-dom"
import useFetch from '../../services/useFetch'
import CardBrowse from '../../style/browse/CardBrowse'
import Spinner from '../../services/Spinner'

const BrowseItem = (props) => {
    const { data: images, loading, error } = useFetch('files');
    if (error) throw error;
    if (loading) return <Spinner />;

    return  (
        <CardBrowse key={props.item.id}>
            <Link to={`item/${props.item.id}`}>
            <img
                className='square'
                src={ (images.find(image => (image.item.id === props.item.id))).file_urls.square_thumbnail }
                alt={props.item.element_texts[0].text} />
            <section className='card-body'>
                <h6>{props.item.element_texts[0].text}</h6>
            </section>
            </Link>
        </CardBrowse>
    )
}

export default BrowseItem;