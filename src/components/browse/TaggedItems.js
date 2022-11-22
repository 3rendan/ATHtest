import React from 'react'
import Board from '../../style/browse/Board'
import BrowseItem from './BrowseItem'
import useTagged from '../../hooks/useTagged'
import Bars from '../../services/Bars'
import { useParams } from 'react-router-dom'
  
const TaggedItems = (props) => {
  const { id } = useParams()
  const res = useTagged(id)
  // console.log(id)
  const items = res.taggedItems
  // console.log(items)

  if (res.loading) return <Bars />

  return (
    <Board>
      <div className="row">
        <h1>Tag Name</h1>
      </div>
    { items.map((item) => {
      return  (
        <BrowseItem item={item} key={item.id} />
      )}
    )}
    </Board>
  	)
  }
  export default TaggedItems;
  