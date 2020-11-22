import React from 'react'
import Style from '../style/Tags'

export default function Tags(props) {
  return (
    <Style>
      <h3>Tags</h3><br/>
      { props.item.tags.map((tag) => {
        return (
          <p style={{justifyContent: 'space-around'}}>{tag.name}</p>
        )
      })}
    </Style>
  )
}
