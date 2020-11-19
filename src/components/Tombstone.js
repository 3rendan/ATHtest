import React from 'react';
import Style from '../style/Tombstone';
import Item from '../views/Item'

const category = ['Creator', 'Subject', 'Rights'];

export default function Tombstone(props) {
  return (
    <Style>
      <tr>
        <th className="mtdt">{ props.item.element_texts[3].element.name }:</th>
        <td>{ props.item.element_texts[3].text }</td>
      </tr>
      <tr>
        <th className="mtdt">{ props.item.element_texts[3].element.name }:</th>
        <td>{ props.item.element_texts[3].text }</td>
      </tr>
      <tr>
        <th className="mtdt">{ props.item.element_texts[8].element.name }:</th>
        <td>{ props.item.element_texts[8].text }</td>
      </tr>
      <tr>
        <th className="mtdt">{ props.item.element_texts[13].element.name }:</th>
        <td>{ props.item.element_texts[13].text }</td>
      </tr>
      <tr>
        <th className="mtdt">{ props.item.element_texts[14].element.name }:</th>
        <td>{ props.item.element_texts[14].text }</td>
      </tr>
      <tr>
        <th className="mtdt">{ props.item.element_texts[32].element.name }:</th>
        <td>{ props.item.element_texts[32].text }</td>
      </tr>
      <tr>
        <th className="mtdt">{ props.item.element_texts[34].element.name }:</th>
        <td>{ props.item.element_texts[34].text }</td>
      </tr>
      { console.log(category) }
    </Style>
  )
}
