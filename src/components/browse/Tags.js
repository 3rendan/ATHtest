import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Style from '../../style/singleItem/Tags'
import Bars from '../../services/Bars'
import ItemsContext from '../../context/ItemsContext'

const Tags = (props) => {
    const { tags, tagsLoading } = useContext(ItemsContext)

    if (tagsLoading) return <Bars />;

    return (
        <Style>
            { tags.map((tag) => {
                return (
                    <div key={tag.id}>
                        <Link to={`/tag/${tag.id}`}>
                            <p className='tag-browse'  style={{color: '#000'}}>{ tag.name }</p>
                        </Link>
                    </div>
                )
            })}
        </Style>
    )
}
export default Tags
