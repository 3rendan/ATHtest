import React from 'react'
import useItem from '../../hooks/useItem'
import getCollection from '../../services/getCollection'
import Bars from '../../services/Bars'
import ProgressBar from '../../services/ProgressBar'
import { useParams } from 'react-router-dom'
import useItemImage from '../../hooks/useItemImage'


const SingleItem = () =>  {
    const { id } = useParams()
    const res = useItem(id)
    const imgRes = useItemImage(id)
    const item = res.item
    const image = imgRes.image
    console.log(imgRes)
    if (res.loading) return <Bars />
    if (imgRes.loading1) return <ProgressBar />

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
