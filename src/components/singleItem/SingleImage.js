import React from 'react'
import useFetch from '../../services/useFetch'
import Spinner from '../../services/Spinner'

export default function SingleImage(props) {
    const { data: images, loading, error } = useFetch('files/')
    if (error) throw error;
    if (loading) return <Spinner />;
    return (
        <>
        { target = images.filter(image => image.item.id === props.item.id)}
            <img
            className='single-item'
            src={ console.log(target)}
            alt={props.item.element_texts[0].text} />
        </>
    )
}
