import React from 'react'
import Style from '../style/Tags'

export default function Tag(props) {
  return (
    <>
    <h1 style={{paddingTop: '1rem'}}>Tags</h1>
    <Style>
      { props.item.tags.map((tag) => {
        return (
          <p className='tag'>{tag.name}</p>
        )
      })}
    </Style>
    </>
  )
}
