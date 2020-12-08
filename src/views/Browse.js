import React from 'react'
import Board from '../style/Board.js'
import NavTabs from '../components/NavTabs'
import Items from '../views/Items'
import Collections from '../components/Collections.js'
import Tags from '../components/Tags.js'


export default function Browse(props) {
    const topics = [ 'Items', 'Tags', 'Collections']
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <>
        <NavTabs props={props} topics={topics} />
            { selectedTab === .0 && <Items/> }
            { selectedTab === .1 && <Tags/>}
            { selectedTab === .2 && <Collections />} 
        </>     
        
    )
}
