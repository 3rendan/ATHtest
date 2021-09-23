import React from 'react'
import { Link } from "react-router-dom"
import Style from '../style/Tags'
import useFetch from '../services/useFetch'
import Spinner from '../services/Spinner'

const Tags = (props) => {
    const { data: tags, loading, error } = useFetch('tags');


    if (error) throw error;
    if (loading) return <Spinner />;

    return (
        <Style>
            { tags.map((tag) => {
                return (
                    <div key={tag.id}>
                        <Link to={`/tag/${tag.id}`} tag={tag} tagId={ tag.id }>
                            <p className='tag-browse'  style={{color: '#000'}}>{ tag.name }</p>
                        </Link>
                    </div>
                )
            })}
        </Style>
    )
}
export default Tags
