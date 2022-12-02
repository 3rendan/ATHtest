import React from 'react'
import Bars from '../../services/Bars'
// import useItemImage from '../../hooks/useItemImage'

const BrowseItem = (props) => {
    // const res = useItemImage(props.item.id)
    // const image = res.image

    // if (res.loading) return <Bars />

    return  (
        <div className='card-browse'>
            <a href={`/item/${props.item.id}`}>           
            <section className='card-body'>
                <h6>{props.item.element_texts[0].text}</h6>
            </section>
            </a>
        </div>
    )
}
export default BrowseItem