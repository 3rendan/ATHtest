import React from 'react'
import Board from '../style/Board.js'
import NavTabs from '../components/NavTabs'
import Items from '../views/Items'
import Collections from '../components/Collections.js'
import Tags from '../components/Tags.js'

const topics = [ 'Items', 'Tags', 'Collections']

export default function Browse(props) {
    
    return (
        <>
        <NavTabs topics={topics} />
            <Board>
                <Items/> 
                <Collections /> 
                <Tags />
            </Board> 
        </>     
        
    )
}
