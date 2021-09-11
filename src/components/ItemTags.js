import React from 'react'
import useFetch from '../services/useFetch'
import Spinner from '../services/Spinner'
import Style from '../style/Tags'

const ItemTags = (props) => {
    const { data: tags, loading, error } = useFetch('tags')
    const itemTags = props.item.tags.map((tag) => {
        return tag.id
    })
    console.log(itemTags)
    if (error) throw error;
    if (loading) return <Spinner />;

  return (
    <>

    <Style>
    { tags.map((tag) => {
        if(itemTags.includes(tag.id)){
          return (
            <>
              <h7>{tag.name}</h7>
            </>
          )
        }
        return null
      })
    }
    </Style>

  </>
  )
}
export default ItemTags
