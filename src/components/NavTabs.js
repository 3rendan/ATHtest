import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import Items from '../views/Items'
import Collections from '../components/Collections.js'
import Tags from '../components/Tags.js'

const NavTabs = (props) => {

    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (e, newValue) => {
        console.log(newValue)
        setSelectedTab(newValue);
    };
    return (
        <>
            <Tabs value={selectedTab} onChange={handleChange} className='navbar'>
                <Tab label={props.topics[0]}/>
                <Tab label={props.topics[1]}/>
                <Tab label={props.topics[2]}/>
            </Tabs>
            { selectedTab === 0 && <Items/> }
            { selectedTab === 1 && <Collections/> }
            { selectedTab === 2 && <Items/> }
        </>

    )
}
export default NavTabs;

