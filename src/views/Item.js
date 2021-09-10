import React from 'react';
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
    const { data: item, loading, error } = useFetch('items/' + props.match.params.id)
    const { data: images } = useFetch(`files`)
    if (error) throw error;
    if (loading) return <Spinner />;
    return (
      <div className='container'>
      <section>  {/* title and collection row */}
        <h3>{ item.element_texts[0].text }</h3>
        <h5>{ getCollection(item.collection.id) }</h5>
      </section>
      <TombstoneImg> {/* this will house image and tombstone in grid */}
        <Tombstone item={ item }/>
        <ItemImg item={ item } images={ images }/>
      </TombstoneImg>
      </div>
    )
  }
  export default Item
