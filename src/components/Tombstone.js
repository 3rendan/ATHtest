import React from 'react';
import Style from '../style/Tombstone';
import Item from '../views/Item';
import Items from '../views/Items';

const showCategory = ['Creator', 'Subject', 'Rights', 'Identifier'];
{ console.log(showCategory) }
export default function Tombstone(props) {

  return (
    <Style className='col-sm-5'>
      { props.item.element_texts.map(marcTag =>{
        return (
          <tr>
            <th className="mtdt">{ marcTag.element.name }:</th>
            <td>{ marcTag.text }</td>
          </tr>
        )}
      )}
    </Style>
  )
}