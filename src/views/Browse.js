import React from 'react'
import Style from '../style/Browse.js'
import NavTabs from '../components/NavTabs'
import Items from '../views/Items'

const topics = [ 'Items', 'Tags', 'Collections']

export default function Browse(props) {
    return (
        <Style>
            <NavTabs topics={topics} />
            <Items />           
        </Style>
    )
}
