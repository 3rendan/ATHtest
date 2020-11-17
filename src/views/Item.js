import React, { useEffect, useState } from 'react';
import useFetch from '../services/useFetch';
import Spinner from '../components/Spinner';
import { getImg } from '../services/imgServices';
// import myStyles from '../style/Main'


  const Item = (props) => {
    const { data: item, loading, error } = useFetch('items/' + props.match.params.id);
    const [ url, setUrl ] = useState([]);
    useEffect(() =>{
      getImg(props.match.params.id).then((u) => setUrl(u))
    }, []);
    console.log(url);
    if (error) throw error;
    if (loading) return <Spinner />;
    return (
      <div className='text-center'>
        <h1>{ item.element_texts[0].text }</h1>
        <h1>{ item.element_texts[1].text }</h1>
        <h1>{ item.element_texts[2].text }</h1>
        <h1>{ item.element_texts[32].text }</h1>
        <h1>{ item.element_texts[16].text }</h1>
        <h1>{ item.element_texts[8].text }</h1>
      </div>
    )
  }
  export default Item
