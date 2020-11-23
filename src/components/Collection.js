import React, { useState } from 'react'
import useFetch from '../services/useFetch'
import Style from '../style/Collection'

export default function Collection(props) {
    console.log(props.collections)
    return (
        <Style>
           <p>collection</p> 
           { console.log(props.collections)}
        </Style>
    )
}
