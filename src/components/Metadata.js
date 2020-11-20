import React from 'react'
import Tombstone from './Tombstone'

const showCategory = ['Creator', 'Subject', 'Rights', 'Identifier'];

export default function Metadata(props) {
  return (
    { props.item.element_texts.some(marcTag => showCategory.includes(marcTag) {
      return (
        <>
        <tr>
          <th className="mtdt">{ marcTag.element.name }:</th>
          <td>{ marcTag.text }</td>
        </tr>
        </>       
      )
    )}
  )
}
