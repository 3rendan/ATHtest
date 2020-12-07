import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import useFetch from '../services/useFetch'
import { getCollection } from '../services/global'
import CardBrowse from '../style/CardBrowse'
import Spinner from '../services/Spinner'

export default function Collections(props) {
    const { data: collections, loading, error } = useFetch('collections/')
    // const [ collection, setCollection ] = useState([])
    if (error) throw error;
    if (loading) return <Spinner />;
    return (
        <>
            { collections.map((collection) =>{
                return (
                    //collection title
                <CardBrowse className="card-browse">
                    <Link to={`collection/${collection.id}`} collections={collections}>
                        <img class="card-img-top" src="..." alt="Card image cap"></img>
                        <h6 className='card-body'>{collection.element_texts[0].text}</h6>
                    </Link>
                </CardBrowse>
                )
            })}
        </>
    )
}
