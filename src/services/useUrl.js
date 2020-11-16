import { useState, useEffect } from 'react';
import useImages from '../services/useImages';


const useUrl = (arr, x) => {
  const [ url, setUrl ] = useState();

  useEffect(() => {
    const picture  = arr.find(image => (image.item.id === x));
    setUrl(picture);
  }, [])
}
export default useUrl;
