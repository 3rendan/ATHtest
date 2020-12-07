import React from 'react'
import Board from '../style/Board.js'
import NavTabs from '../components/NavTabs'
import Items from '../views/Items'
import Collections from '../components/Collections.js'
import Tags from '../components/Tags.js'


export default function Browse(props) {
    const topics = [ 'Items', 'Tags', 'Collections']
    const activeKey = 'items';
    return (
        <>
        <NavTabs topics={topics} />
            <Items/> 
            <Collections /> 
            <Tags/>
        </>     
        
    )
}
