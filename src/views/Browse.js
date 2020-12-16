import React from 'react'
import NavTabs from '../components/NavTabs'
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
        <NavTabs topics={topics} />
            
        </>     
        
    )
}
