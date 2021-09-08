import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import getCollection from '../services/getCollection'
import useFetch from '../services/useFetch'
import Tombstone from '../components/Tombstone'
import Story from '../components/Story'
import Resources from '../components/Resources'
import ItemTags from '../components/ItemTags'
// import Socials from '../components/Socials'
import Spinner from '../services/Spinner'
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
    const topics = ['Info', 'Story', 'Resources']
    const [selectedTab, setSelectedTab] = React.useState(0);

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

      <div className='grid'>
        <section>
        <>
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
          { selectedTab === 0 && <Tombstone item={item} /> }
          { selectedTab === 1 && <Story item={item}/> }
          { selectedTab === 2 && <Resources item={item} /> }
        </>
          <ItemTags item={item}/>
        </section>
        <div>
        { images.map((image) => {
              if(item.element_texts.text === 'Sculpture' && image.item.id === item.id){
                return (
                  <>
                    <img
                    className='sculpture-item'
                    src={ image.file_urls.fullsize }
                    alt={item.element_texts[0].text} />
                  </>
                )
              } else if(image.item.id === item.id){
                return (
                  <>
                    <img
                    className='single-item'
                    src={ image.file_urls.square_thumbnail }
                    alt={item.element_texts[0].text} />
                  </>
                )
              }
              return null
            })
          }
        </div>
      </div>
      </div>

    )
  }
  export default Item
