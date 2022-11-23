import React from 'react'
import { Link } from 'react-router-dom'
// import useFetch from '../../services/useFetch'
import Bars from '../../services/Bars'
import Style from '../../style/singleItem/Tags'

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
