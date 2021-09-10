import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import MetadataTombstone from '../components/MetadataTombstone';
import Story from '../components/Story';
import Resources from '../components/Resources';
import Style from '../style/MetadataTombstone';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
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


const Tombstone = (props) => {
  const topics = ['Info', 'Story', 'Resources']
  const [selectedTab, setSelectedTab] = React.useState(0); // Material UI
  const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
  };

  return (
    <>
      {/* Material UI tabs for tomstone */}
        <ThemeProvider theme={theme}>
          <Tabs
          value={selectedTab}
          className='navbar'
          onChange={handleChange}
          variant='fullWidth'
          aria-label='full width tabs example'>
            <Tab label={topics[0]}/>
            <Tab label={topics[1]}/>
            <Tab label={topics[2]}/>
          </Tabs>
        </ThemeProvider>
          {/* selecting which info displays */}
          { selectedTab === 0 && <MetadataTombstone item={ props.item } /> }
          { selectedTab === 1 && <Story item={ props.item }/> }
          { selectedTab === 2 && <Resources item={ props.item } /> }
    </>
)


}
export default Tombstone
