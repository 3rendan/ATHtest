import React from 'react'
import { Link } from "react-router-dom"
import useFetch from '../../services/useFetch'
// import Style from '../style/CardBrowse'
import getCollection from '../../services/getCollection'
import Board from '../../style/browse/Board'
import Spinner from '../../services/Spinner'
import CardBrowse from '../../style/browse/CardBrowse'

export default function Collection(props) {
    const { data: items, loading, error } = useFetch('items');
    const { data: images } = useFetch('files');
    const id = parseInt(props.match.params.id)
    const collectionItems = items.filter((item) => item.collection.id === id)
    
    if (error) throw error;
    if (loading) return <Spinner />;
  
    return (
        <>
            <h1>{ getCollection(id)} </h1>
            <Board>
            { collectionItems.map(item => {
  			return  (
                <CardBrowse key={item.id}>
                    <Link to={`../item/${item.id}`}>
                        <img
                            className='image-top square'
                            src={ (images.find(image => (image.item.id === item.id))).file_urls.square_thumbnail }
                            alt={item.element_texts[0].text} />
                        <section className='card-body'>
                            <h6>{item.element_texts[0].text}</h6>
                        </section>
                    </Link>
                </CardBrowse>
            )})}
            </Board>   
        </>
    )
}
