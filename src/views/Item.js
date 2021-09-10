import React from 'react'

import getCollection from '../services/getCollection'
import useFetch from '../services/useFetch'
import Tombstone from '../components/Tombstone'
import Story from '../components/Story'
import Resources from '../components/Resources'
import ItemImg from '../components/ItemImg'
import TombstoneImg from '../style/TombstoneImg'
import TagsDwnlds from '../style/TagsDwnlds'
// import Socials from '../components/Socials'
import Spinner from '../services/Spinner'

// Material UI tab stuff
import { Tabs, Tab } from '@material-ui/core'
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

const Item = (props) => {
    const topics = ['Info', 'Story', 'Resources']
    const [selectedTab, setSelectedTab] = React.useState(0); // Material UI

    const { data: item, loading, error } = useFetch('items/' + props.match.params.id)
    const { data: images } = useFetch(`files`)



    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    if (error) throw error;
    if (loading) return <Spinner />;
    return (
      <div className='container'>
      <section>
        <h3>{ item.element_texts[0].text }</h3>
        <h5>{ getCollection(item.collection.id) }</h5>
      </section>
      <TombstoneImg> {/* this will house image and tombstone in grid */}
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
              { selectedTab === 0 && <Tombstone item={item} /> }
              { selectedTab === 1 && <Story item={item}/> }
              { selectedTab === 2 && <Resources item={item} /> }
        </>
      </TombstoneImg>
      </div>




    )
  }
  export default Item
