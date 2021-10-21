import React from 'react'
import useFetch from '../services/useFetch'
import Spinner from '../services/Spinner'

const Tag = (props) =>{
  const { data: tags, loading, error } = useFetch('tags')
  const tagId = (parseInt(props.match.params.id))
  if (error) throw error;
  if (loading) return <Spinner />;
  return (
  <div>
    { tags.map((tag) => {
        if(tag.id === tagId){
          return (
            <div>
              <h2>{tag.name}</h2>
              <p>hello</p>
            </div>
          )
        }
        return null
      })
    }

  </div>
  )
}
export default Tag
