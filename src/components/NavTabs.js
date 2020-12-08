import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import Items from '../views/Items'
import Item from '../views/Item'
import Collections from '../components/Collections'
import Tags from '../components/Tags'

const NavTabs = (props) => {

    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        
        <Tabs value={selectedTab} onChange={handleChange} className='navbar'>
            <Tab label={props.topics[0]} />
            <Tab label={props.topics[1]} />
            <Tab label={props.topics[2]} />
        </Tabs>

    )
}
export default NavTabs;
