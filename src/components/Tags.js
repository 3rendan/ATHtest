import React from 'react'
import Style from '../style/Tags'
import useFetch from '../services/useFetch'

export default function Tags() {
    const { data: tags, loading, error } = useFetch('tags');
    const tagNames = tags.map((tag) => tag.name)
    const tName = tagNames.sort()

    return (
        <>
            <h1 style={{paddingTop: '1rem'}}>Tags</h1>
            <Style>
            { tName.map((tag) => {
                return (
                    <p className='tag'>{tag}</p>
                )
            })}
            </Style>
            </>
    )
}

