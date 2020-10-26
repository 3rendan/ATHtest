import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import useItem  from '../Calls'

  const Item = (item) => {
    let x = useItem(item.match.params.id);
    console.log(item.match.params)



    return (

      <div>
        <h1>{x.id}</h1>
      </div>
    )
  }
  export default Item
