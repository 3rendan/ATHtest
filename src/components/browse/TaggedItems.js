import React, { useContext } from 'react'
import Board from '../../style/browse/Board'
import BrowseItem from './BrowseItem'
import ItemsContext from '../../context/ItemsContext'
import Bars from '../../services/Bars'
  
const TaggedItems = (props) => {
  const { items, isLoading } = useContext(ItemsContext)
  if (isLoading) return <Bars />

  return (
    <Board>
      <div className="row col-12">
        <h1 className="text-center">What tag is this?</h1>
      </div>
      <br />
  		{ items.map((item) => {
  			return  (
          <BrowseItem item={item} />
        )})
      }
  		</Board>
  	)
  }
  export default TaggedItems;
  