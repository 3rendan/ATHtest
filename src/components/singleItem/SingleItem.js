import React from 'react'
import useItem from '../../hooks/useItem'
import getCollection from '../../services/getCollection'
import Bars from '../../services/Bars'
import { useParams } from 'react-router-dom'


const SingleItem = () =>  {
    const { id } = useParams()
    const res = useItem(id)
    const item = res.item
    if (res.loading) return <Bars />

    return (
        <div>
            <section>  {/* title and collection row */}
                <h3>{item.element_texts[0].text}</h3>
                <h5>{getCollection(item.collection.id)}</h5>
            </section>

        </div>
  )
}
export default SingleItem
