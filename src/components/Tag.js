import React from 'react'
import useFetch from '../services/useFetch'
import Spinner from '../services/Spinner'

export default function Tag(props) {
  const { data: tags, loading, error } = useFetch('tags')
  let tagId = parseInt(props.match.params.id)
  
  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <>
    { tags.map((tag) => {
        if(tag.id === tagId){
          return (
            <>
              <h1>{tag.name}</h1>
            </>
          )
        }
      })
    }

  </>
  )
}

