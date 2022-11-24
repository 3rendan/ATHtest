import React from 'react'
import { useParams } from 'react-router-dom'
import useItem from '../../hooks/useItem'
import Bars from '../../services/Bars'

export default function Story(props) {
    const { id } = useParams()
    const res = useItem(id)
    const item = res.item
    const showCategory = ['Description'];

    if(res.loading) return <Bars />
    return (
    <>
            { item.element_texts.map((marcTag) =>{
                if(showCategory.includes(marcTag.element.name)){
                    return (
                        <>
                            <section className="paragraph">{ marcTag.text }</section>
                        </>
                        )
                }
                return null
                })}
    </>
    )
}
