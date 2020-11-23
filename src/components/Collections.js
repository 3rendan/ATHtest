import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import useFetch from '../services/useFetch'
import Style from '../style/Collections'
import { getCollection } from '../services/global'

export default function Collections(props) {
    const { data: collections, loading, error } = useFetch('collections/')
    // const [ collection, setCollection ] = useState([])
    return (
        <Style>
            { collections.map((collection) =>{
                return (

                    //collection title
                    <Link to={`collection/${collection.id}`} collections={collections}><p>{collection.element_texts[0].text}</p></Link>
                )
            })}
        </Style>
    )
}
