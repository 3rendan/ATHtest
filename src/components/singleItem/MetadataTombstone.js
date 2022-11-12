import React from 'react';
import Style from '../../style/singleItem/MetadataTombstone';

/**
 * ComponentName
 */

const MetadataTombstone = (props) =>{ // eslint-disable-line react/prefer-stateless-function
  const showCategory = ['Creator', 'Subject', 'Date', 'BASIC genre/form', 'Acquisition note(s)', 'Rights', 'Identifier' ];
  return(
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

export default MetadataTombstone;
