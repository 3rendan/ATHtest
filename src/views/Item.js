import React from 'react'
import SingleItem from '../components/singleItem/SingleItem'



const Item = (props) => {
    return (
    <>
        <SingleItem id={props.match.params.id} />
    </>
    )
}
export default Item