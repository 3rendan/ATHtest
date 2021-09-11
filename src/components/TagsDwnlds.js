import React from 'react';
import Style from '../style/TagsDwnlds'
import ItemTags from '../components/ItemTags'

/**
 * TagsDwnlds
 */
const TagsDwnlds = (props) => { // eslint-disable-line react/prefer-stateless-function
    return (
      <Style>
      <ItemTags className='grid-item-1' item={item}/>
      <div className='grid-item-2 dwnlds'>
        <div className='grid-item-3'>
          <h1>download tif</h1>
        </div>
        <div className='grid-item-3'>
          <h1>download jpeg</h1>
        </div>
        <div className='grid-item-4'>
          <h1>citation</h1>
        </div>
      </div>
    </Style>
    );
  }
}

export default TagsDwnlds;
