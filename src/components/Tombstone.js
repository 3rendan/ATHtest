import React from 'react';
import Style from '../style/Tombstone';
import Item from '../views/Item';
import Items from '../views/Items';

const showCategory = ['Creator', 'Subject', 'Rights'];
{ console.log(showCategory) }
export default function Tombstone(props) {

  return (
    <Style className='col-sm-5'>

      <tr>
        <th className="mtdt">{ props.item.element_texts[8].element.name }:</th>
        <td>{ props.item.element_texts[8].text }</td>
      </tr>
    </Style>
  )
}