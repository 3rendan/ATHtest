import React from 'react'
import Style from '../style/Tags'
import useFetch from '../services/useFetch'
import Spinner from '../services/Spinner'

export default function Tags() {
    const { data: tags, loading, error } = useFetch('tags');
    const tagNames = tags.map((tag) => tag.name);
    const tName = tagNames.sort();

    if (error) throw error;
    if (loading) return <Spinner />;

    return (
        <>
            <Style>
            { tName.map((tag) => {
                return (
                    <p className='tag-browse'>{tag}</p>
                )
            })}
            </Style>
            </>
    )
}

