import React from 'react';
import Style from '../style/Tombstone';


export default function Tombstone(props) {
  const showCategory = ['Creator', 'Subject', 'Rights', 'Identifier'];
  return (
    <Style className='first'>
      { props.item.element_texts.map((marcTag) =>{
        if(showCategory.includes(marcTag.element.name)){
          return (
            <>
            <section className="mtdt mtdt-category">{ marcTag.element.name }:</section>
            <section className="mtdt">{ marcTag.text.replace(/\s*\<.*?\>\s*/g, '') }</section>
          </>
        )
      }
    }
    )}
    </Style>
  )
}