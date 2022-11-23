import React from 'react'
import { Link } from 'react-router-dom'
const ItemTags = (props) => {
  const { tags } = props.item
  
  return (
    <>
    <h2>Tags</h2> 
    <div className="tag-blob">
  { tags.map((tag) => {
    return (
        <Link to={`/tag/${tag.id}`}>
          <h7>{tag.name}</h7>
        </Link>
      )
    })
  }
  </div> 
  </>
  )
}
export default ItemTags
