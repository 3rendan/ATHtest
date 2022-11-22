import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'
import Metadata from './Metadata';
import Story from './Story'
import Resources from './Resources'
import Style from '../../style/singleItem/Tombstone'
import theme from '../../style/general/Layout'


const Tombstone = (props) => {
  const topics = ['Info', 'Story', 'Resources']
  const [selectedTab, setSelectedTab] = React.useState(0) // Material UI
  const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
  };

  return (
    <Style>
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
          { selectedTab === 0 && <Metadata /> }
          { selectedTab === 1 && <Story /> }
          { selectedTab === 2 && <Resources /> }
    </Style>
)


}
export default Tombstone
