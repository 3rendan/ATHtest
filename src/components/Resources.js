import React from 'react'


export default function Resources(props) {
    const showCategory = ["Citation/reference note(s)"];
    return (
        <>
                { props.item.element_texts.map((marcTag) =>{
                    if(showCategory.includes(marcTag.element.name)){
                        return (
                            <>
                                <section className="paragraph">{ marcTag.text.replace(/\s*\<.*?\>\s*/g, '') }</section>
                            </>
                            )
                    }})}
        </>
        )
    }
    