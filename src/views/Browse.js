import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Items from '../views/Items'
import Collections from '../components/Collections.js'
import Tags from '../components/Tags.js'
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#999999"
        },
        secondary: {
            main: "#C4D425"
        }
    }
  })


export default function Browse(props) {
    const topics = [ 'Items', 'Tags', 'Collections'];


    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <>
        <ThemeProvider theme={theme}>
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
            </ThemeProvider>
            { selectedTab === 0 && <Items/> }
            { selectedTab === 1 && <Tags/> }
            { selectedTab === 2 && <Collections/> }  
        </> 
        
    )
}
