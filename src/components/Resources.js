import React from 'react'
import Style from '../style/Tombstone'


export default function Resources(props) {
    const showCategory = ["Citation/reference note(s)"];
    return (
        <>
                { props.item.element_texts.map((marcTag) =>{
                    if(showCategory.includes(marcTag.element.name)){
                        return (
                            <>
                                <section className="paragraph">{ marcTag.text }</section>
                            </>
                            )
                    }})}
        </>
        )
    }
    