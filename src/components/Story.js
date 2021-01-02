import React from 'react'

export default function Story(props) {
    const showCategory = ['Description'];
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
