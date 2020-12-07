import React from 'react'
import Board from '../style/Board.js'
import NavTabs from '../components/NavTabs'
import Items from '../views/Items'
import Collections from '../components/Collections.js'

const topics = [ 'Items', 'Tags', 'Collections']

export default function Browse(props) {
    return (
        <>
        <NavTabs topics={topics} />
            <Board>
                <Items /> 
                <Collections /> 
            </Board> 
        </>     
        
    )
}
