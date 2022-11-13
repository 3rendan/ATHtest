import React from 'react'
import Loader from 'react-loader-spinner'
import {secondaryColor} from '../../src/constants'

const Bars = () => {
  return (
    <Loader type="Bars" color={secondaryColor} height={80} width={80}/>
  )
}

export default Bars 