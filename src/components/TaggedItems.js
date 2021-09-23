import React from 'react'
import useFetch from '../services/useFetch'
import Spinner from '../services/Spinner'

const TaggedItems = (props) => {
  const { data: items, loading, error } = useFetch('items');
  const { data: images } = useFetch('files');
  //const id = parseInt(props.match.params.id)
  let tagId = props.tagId



  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <>
      { items.forEach((item) =>{
          let idArr = [];
          item.tags.map((tag) =>{
            idArr.push(tag.id)
          })
          console.log(idArr)
          })
        })
      })
    }
    </>
  )
}


export default TaggedItems
