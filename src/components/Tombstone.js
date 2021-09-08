import React from 'react';
import Style from '../style/Tombstone';


const Tombstone = (props) => {
  const showCategory = ['Creator', 'Subject', 'Rights', 'Identifier', 'Date', 'Format', 'BASIC genre/form', 'Acquisition note(s)'];
  return (
    <Style>
      { props.item.element_texts.map((marcTag) =>{
        if(showCategory.includes(marcTag.element.name)){
          return (
            <>
              <section className="mtdt mtdt-category">{ marcTag.element.name }:</section>
              <section className="mtdt mtdt-content">{ marcTag.text.replace(/\s*<.*?>\s*/g, '') }</section>
            </>
        )
      }
      return null;
    }
    )}
    </Style>
  )
}
export default Tombstone
