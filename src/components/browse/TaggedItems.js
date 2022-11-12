import React from 'react'
import useFetch from '../../services/useFetch'
import Board from '../../style/browse/Board'
import BrowseItem from './BrowseItem'
import Spinner from '../../services/Spinner'

const TaggedItems = (props) => {
  const { data: items, loading, error } = useFetch('items');
  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <Board>
      { console.log(props) }
  		{ items.map((item) => {
  			return  (
            <BrowseItem item={item} />
  				)})
  			}
  		</Board>
  	)
  }
  export default TaggedItems;
  