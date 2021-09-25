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
      { items.map((item) =>{
        let tagId = props.tagId
        if (item.tags.some((e) => e.id === 6)){
            console.log(item.id)
          }
        })
        }
    </>
  )
}


export default TaggedItems
