import React from 'react'
import useFetch from '../services/useFetch'
import Spinner from '../services/Spinner'
import Style from '../style/Tags'

export default function ItemTags(props) {
    const { data: tags, loading, error } = useFetch('tags')
    const itemTags = props.item.tags.map((tag) => {
        return tag.id
    })
    console.log(itemTags)
    if (error) throw error;
    if (loading) return <Spinner />;
  
  return (
    <>
    <h1>Tags</h1>
    <Style>
    { tags.map((tag) => {
        if(itemTags.includes(tag.id)){
          return (
            <>
              <h7>{tag.name}</h7>
            </>
          )
        }
      })
    }
    </Style>

  </>
  )
}