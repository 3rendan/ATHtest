import React from 'react'
import { Link } from "react-router-dom"
import useFetch from '../services/useFetch'
import Board from '../style/Board'
import CardBrowse from '../style/CardBrowse'
import Spinner from '../services/Spinner'

export default function TaggedItems(props) {
    const { data: items, loading, error } = useFetch('items');
    const { data: images } = useFetch('files');
    let tag = props.tagId
    
  
  
    if (error) throw error;
    if (loading) return <Spinner />;
    return (
        <>
        {  items.map((item) => {
            item.tags.map((tag) => {
                
            })
            
        })
        }    
        </>
    )
}
