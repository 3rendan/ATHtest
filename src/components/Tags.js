import React from 'react'
import Style from '../style/Tags'

export default function Tags(props) {
  return (
    <>
    <h5>Tags</h5>
    <Style>
      <ul>
      { props.item.tags.map((tag) => {
        return (
          <li>{tag.name}</li>
        )
      })}
      </ul>
    </Style>
    </>
  )
}
