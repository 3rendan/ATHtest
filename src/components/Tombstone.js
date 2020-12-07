import React from 'react';
import Style from '../style/Tombstone';
// import Metadata from '../components/Metadata';

// const pref = props.item.element_texts.some(marcTag => showCategory.includes(marcTag);
export default function Tombstone(props) {
  const showCategory = ['Creator', 'Subject', 'Rights', 'Identifier', 'Description'];
  return (
    <Style>
    { props.item.element_texts.map((marcTag) =>{
      if(showCategory.includes(marcTag.element.name)){
        return (
          <>
            <section className="mtdt mtdt-category">{ marcTag.element.name }:</section>
            <section className="mtdt">{ marcTag.text }</section>
          </>
        )
      }
    }
    )}
    </Style>
  )
}