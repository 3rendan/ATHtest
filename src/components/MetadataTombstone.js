import React from 'react';
import Style from '../style/Tombstone';

/**
 * ComponentName
 */
const MetadataTombstone = (props) =>{ // eslint-disable-line react/prefer-stateless-function
  render() {
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
  }
}

MetadataTombstone.propTypes = {
  prop: PropTypes.type.isRequired
}

export default MetadataTombstone;
