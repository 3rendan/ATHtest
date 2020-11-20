import React from 'react'
import Style from '../style/NavTabs'

export default function NavTabs(props) {
    return (
        <Style>
           { props.item.element_texts.map((element)=>{
               console.table(element.element.element_texts)
               })
           }
           )}
        </Style>
    )
}
