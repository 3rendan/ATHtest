import React from 'react'
import useFetch from '../services/useFetch'
import Spinner from '../services/Spinner'

const TaggedItems = (props) => {
  const { data: items, loading, error } = useFetch('items');
  const { data: images } = useFetch('files');
  //const id = parseInt(props.match.params.id)



  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <>
      { items.flatMap((item) =>{
        let tagId = props.tagId
        item.tags.flatMap((e) =>{
          console.log(e)
        })
        })
        }
    </>
  )
}


export default TaggedItems
