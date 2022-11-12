import React from 'react'
import useFetch from '../../services/useFetch'
import Board from '../../style/browse/Board'
import BrowseItem from './BrowseItem'
import Spinner from '../../services/Spinner'


const Items = (props) => {
  const { data: items, loading, error } = useFetch('items');

  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <Board>
  		{ items.map((item) => {
        console.log(item)
  			return  (
            <BrowseItem item={item} />
  				)})
  			}
  		</Board>
  	)
  }

  export default Items;
