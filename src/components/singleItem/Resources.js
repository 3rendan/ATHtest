import React from 'react'
import { useParams } from 'react-router-dom'
import useItem from '../../hooks/useItem'
import Bars from '../../services/Bars'


export default function Resources(props) {
    const { id } = useParams()
    const res = useItem(id)
    const item = res.item
    const showCategory = ["Citation/reference note(s)"]

    if(res.loading) return <Bars />
    return (
        <>
                { item.element_texts.map((marcTag) =>{
                    if(showCategory.includes(marcTag.element.name)){
                        return (
                            <>
                                <section className="paragraph">{ marcTag.text.replace(/\s*<.*?>\s*/g, '') }</section>
                            </>
                            )
                    }
                    return null
                    })}
        </>
        )
    }
    