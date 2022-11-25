import React from 'react'
import getCollection from '../../services/getCollection'

const ItemTitle = (props) =>  {
    return (
        <div className='offset-1'>
            <section>  {/* title and collection row */}
                <h3 className='item-title-text'>{props.item.element_texts[0].text}</h3>
                <h5 className='item-title-text'>{getCollection(props.item.collection.id)}</h5>
            </section>
        </div>
  )
}
export default ItemTitle
