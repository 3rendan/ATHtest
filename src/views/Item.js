import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

import { useItem } from '../Calls'

  const Item = (item) => {
    console.log(item.match.params.id)
    const singleItem = useItem(item.match.params.id);
    console.log(singleItem.data)
    return (
      <div>
        <h1>how do I pass item props</h1>
      </div>
    )
  }
  export default Item
