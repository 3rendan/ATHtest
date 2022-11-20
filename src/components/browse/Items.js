import React, { useContext } from 'react'
import Board from '../../style/browse/Board'
import BrowseItem from './BrowseItem'
import Bars from '../../services/Bars'
import ItemsContext from '../../context/ItemsContext'

const Items = () => {
  const { items, isLoading } = useContext(ItemsContext)

  if (isLoading) return <Bars />

  return (
    <Board>
    { items.map((item) => {
      return  (
        <BrowseItem item={item} key={item.id} />
      )}
    )}
    </Board>
    )
}
export default Items
