import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../services/useFetch'
import Bars from '../../services/Bars'
import Style from '../../style/singleItem/Tags'

const ItemTags = (props) => {
    const { data: tags, loading, error } = useFetch('tags')
    const itemTags = props.item.tags.map((tag) => {
        return tag.id
    })
    console.log(itemTags)
    if (error) throw error;
    if (loading) return <Bars />;

  return (
    <div>
    <Style>
    { tags.map((tag) => {
        if(itemTags.includes(tag.id)){
          return (
            <div>
              <Link to={`/tag/${tag.id}`}>
                <h7>{tag.name}</h7>
              </Link>
            </div>
          )
        }
        return null
      })
    }
    </Style>

  </div>
  )
}
export default ItemTags
