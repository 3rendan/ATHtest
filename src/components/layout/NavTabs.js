import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import Items from '../browse/Items'
import Collections from '../browse/Collections.js'

const NavTabs = (props) => {
    const [selectedTab, setSelectedTab] = React.useState(0);
    const handleChange = (e, newValue) => {
        console.log(newValue)
        setSelectedTab(newValue);
    };
    return (
        <>
            <Tabs value={selectedTab} onChange={handleChange} className='navbar'>
                <h1><Tab label={props.topics[0]}/></h1>
                <h1><Tab label={props.topics[1]}/></h1>
                <h1><Tab label={props.topics[2]}/></h1>
            </Tabs>
            { selectedTab === 0 && <Items/> }
            { selectedTab === 1 && <Collections/> }
            { selectedTab === 2 && <Items/> }
        </>
    )
}
export default NavTabs;
