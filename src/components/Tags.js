import React, {useEffect, useState} from 'react';
import { useTags } from '../Calls';


const Tags = () => {
  const tags = useTags();
  console.log(tags)
  return (
    <div>
    { tags.map(tag => {
      return  (
          <div key={tag.id} className="text-center">
              <h3>{ tag.name }</h3> has<h3> { tag.id } for an id</h3>
          </div>
        )
    })}
    </div>
  );
}




export default Tags;
