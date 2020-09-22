import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useTags = () => {
  const [tags, setTags] = useState([]);
  useEffect(() =>{
    axios('http://digital.provath.org/api/tags')
    .then(res => setTags(res))
    .catch(error => console.error(error))
  }, [])
  return tags;

}
