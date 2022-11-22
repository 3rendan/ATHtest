import React from 'react'
import getCollection from '../../services/getCollection'

const ItemTitle = (props) =>  {
    return (
        <div>
            <section>  {/* title and collection row */}
                <h3>{props.item.element_texts[0].text}</h3>
                <h5>{getCollection(props.item.collection.id)}</h5>
            </section>
        </div>
  )
}
export default ItemTitle
