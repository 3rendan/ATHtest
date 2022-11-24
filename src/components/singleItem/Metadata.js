import React from 'react'
import { useParams } from 'react-router-dom'
import Style from '../../style/singleItem/Metadata'
import useItem from '../../hooks/useItem'
import Bars from '../../services/Bars'

const MetadataTombstone = () =>{
  const { id } = useParams()
  const res = useItem(id)
  const item = res.item
  const showCategory = ['Creator', 'Subject', 'Date', 'BASIC genre/form', 'Acquisition note(s)', 'Rights', 'Identifier' ]

  if(res.loading) return <Bars />
  return(
    <Style>
      { item.element_texts.map((marcTag) =>{
        if(showCategory.includes(marcTag.element.name)){
          return (
            <>
              <section className="mtdt mtdt-category">{ marcTag.element.name }:</section>
              <section className="mtdt mtdt-content">{ marcTag.text.replace(/\s*<.*?>\s*/g, '') }</section>
            </>
        )
      }
      return null;
    }
    )}
    </Style>
)
}

export default MetadataTombstone;
