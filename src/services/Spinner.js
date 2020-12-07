import React from 'react'
import Loader from 'react-loader-spinner'



export default function Spinner() {
    return (
        <Loader
        className='text-center'
        style={{paddingTop: '2rem'}}
        type="Bars"
        color="#C4D425"
        height={100}
        width={100}
        timeout={3000} //3 secs

     />
    )
}
