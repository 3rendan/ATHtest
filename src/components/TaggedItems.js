import React from 'react'
import useFetch from '../services/useFetch'
import Spinner from '../services/Spinner'

export default function TaggedItems(props) {
    const { data: items, loading, error } = useFetch('items');
    let tagId = props.tagId
    const itemTags = items.map((item) =>{
        return item.tags;
    })
    
    
  
  
    if (error) throw error;
    if (loading) return <Spinner />;
    return (
        <>
        { itemTags.map((tag)=>{
            if(tag.id === tagId){
                return (
                <p key={tag.id}>Tagged Item</p>
                )
            }
            return null
        })}
        </>
    )
}
