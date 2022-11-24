import React from 'react'
import Loader from 'react-loader-spinner'
import {secondaryColor} from '../../src/constants'

const ProgressBar = () => {
  return (
    <div className='flex justify-center items-center'>
        <Loader type="Circles" color={secondaryColor} height={80} width={80}/>
    </div>
  )
}

export default ProgressBar 