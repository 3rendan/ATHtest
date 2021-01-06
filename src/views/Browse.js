import React from 'react'
// import NavTabs from '../components/NavTabs'
import { Tabs, Tab } from '@material-ui/core'
import Items from '../views/Items'
import Collections from '../components/Collections.js'
import Tags from '../components/Tags.js'


export default function Browse(props) {
    const topics = [ 'Items', 'Tags', 'Collections'];

    const { children, value, index, ...other } = props;

    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <>
            <Tabs 
            value={selectedTab} 
            onChange={handleChange} 
            className='navbar' 
            variant='fullWidth'
            aria-label='full width tabs example'>
                <Tab label={topics[0]}/>
                <Tab label={topics[1]}/>
                <Tab label={topics[2]}/>
            </Tabs>
            { selectedTab === 0 && <Items/> }
            { selectedTab === 1 && <Tags/> }
            { selectedTab === 2 && <Collections/> }  
        </> 
        
    )
}
