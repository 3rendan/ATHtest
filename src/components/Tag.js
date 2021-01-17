import React from 'react'
import useFetch from '../services/useFetch'
import Spinner from '../services/Spinner'

export default function Tag(props) {
  
  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <>
    { tags.map((tag) => {
        if(tag.id === id){
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

