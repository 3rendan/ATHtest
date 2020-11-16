import React from 'react';
import useFetch from '../services/useFetch';
import Spinner from '../components/Spinner';
import SqImg from '../services/SqImg';
// import myStyles from '../style/Main'


  const Item = (props) => {
    const { data: item, loading, error } = useFetch('items/' + props.match.params.id);

    if (error) throw error;
    if (loading) return <Spinner />;
    return (
      <div className='text-center'>
      <SqImg props={props}/>
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
