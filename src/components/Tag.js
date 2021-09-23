import React from 'react'
import useFetch from '../services/useFetch'
import Spinner from '../services/Spinner'
import TaggedItems from './TaggedItems'

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
              <TaggedItems tagId={ props.match.params.id }/>
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
