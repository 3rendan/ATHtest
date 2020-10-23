import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

import { useItem } from '../Calls'

  const Item = () => {
    const item = useItem();
    //console.log(item)
    return (
      <div>
        <h1> { item.id }</h1>
      </div>
    )
  }
  export default Item
