import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Bars from '../services/Bars'
import ItemTitle from '../components/singleItem/ItemTitle'
import ItemImg from '../components/singleItem/ItemImg'
import MobileImg from '../components/singleItem/MobileImg'
import Tombstone from '../components/singleItem/Tombstone'
import ItemTags from '../components/singleItem/ItemTags'
import Dwnlds from '../components/singleItem/Dwnlds'
import Socials from '../components/singleItem/Socials'
import ItemsContext from '../context/ItemsContext'

const Item = () =>  {
    const { id } = useParams()
    const { items, isLoading } = useContext(ItemsContext)
    const [ archiveItem, setArchiveItem ] = useState({})

    const intId = parseInt(id)
    useEffect(() =>{
        const storedItem = localStorage.getItem('stored-item')
        const getArchiveItem = () => {
            if(storedItem !== null){
                setArchiveItem(JSON.parse(storedItem))
            } else {
                setArchiveItem(items.find(item => item.id === intId))
            }
        }
        getArchiveItem() 
        return () => {
            localStorage.removeItem('stored-item')
        } 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })
    useEffect(() => {
        localStorage.setItem('stored-item', JSON.stringify(archiveItem))
    }, [archiveItem])


    if (isLoading) return <Bars />
    
    return (
      <div className='container'>
      <section>  {/* title and collection row */}
        <h3>{ item.element_texts[0].text }</h3>
        <h5>{ getCollection(item.collection.id) }</h5>
      </section>
      <button className="img-modal" onClick={()=> setIsOpen(true) }><MobileImg  item={ item } images={ images }/></button>
      <Modal open={ isOpen } onClose={ () => setIsOpen(false)} >
        { images.map((image) => {
          if(image.item.id === item.id){
            return (
                <img
                className='img-modal'
                src={ image.file_urls.fullsize }
                alt={item.element_texts[0].text}
                image={ image.file_urls.fullsize }/>
              )
            }
            return null
          })
          }
      </Modal>
      <TombstoneImg> {/* this will house image and tombstone in grid */}
        <Tombstone item={ item }/>
        <button className="img-modal" onClick={()=> setIsOpen(true) }><ItemImg item={ item } images={ images }/></button>
        <Modal open={ isOpen } onClose={ () => setIsOpen(false)} >
          { images.map((image) => {
            if(image.item.id === item.id){
              return (
                  <img
                  className='img-modal'
                  src={ image.file_urls.fullsize }
                  alt={item.element_texts[0].text}
                  image={ image.file_urls.fullsize }/>
                )
              }
              return null
            })
            }
        </Modal>
      </TombstoneImg>
      <div className='socials'>
        <h1>Tags</h1>
        <Socials />
      </div>
      <TagsDwnlds>
        <ItemTags item={ item }/>
        <Dwnlds item={ item }/>
      </TagsDwnlds>
      </div>
    )
}
export default Item