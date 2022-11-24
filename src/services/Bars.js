import React from 'react'
import Loader from 'react-loader-spinner'
import {secondaryColor} from '../../src/constants'

const Bars = () => {
  return (
    <div className="col-12 text-center">
      <Loader type="Bars" color={secondaryColor}/>
    </div>
  )
}

export default Bars 