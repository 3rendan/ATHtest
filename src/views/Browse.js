import React from 'react'
import Style from '../style/Browse.js'
import NavTabs from '../components/NavTabs'
import Items from '../views/Items'
import Collections from '../components/Collections.js'

const topics = [ 'Items', 'Tags', 'Collections']

export default function Browse(props) {
    return (
        <Style  className='container'>
        <NavTabs topics={topics} />
            <div>
                <Items />  
                <Collections/>   
            </div>      
        </Style>
    )
}
