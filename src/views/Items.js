import React, { Component } from 'react'
import axios from 'axios';
//import BrowseImage from '../components/BrowseImage'
import { Link } from "react-router-dom";
// import { useItems } from '../Calls';

const imgBrowse = {
  maxWidth: '99%',
  margin: 'auto'
};
const cardBrowse = {
  display: 'flex',
  justifyContent: 'space-around'
};
const singleBrowse = {
  flexBasis: '20%',
  margin: '10px',
  border: '1px #000 solid',
  padding: '5px',
}
export default class Items extends Component {
  state = {
      items: [],
      images: []
  }
  componentDidMount(){
    axios.all([
      axios.get('http://digital.provath.org/api/items'),
      axios.get('http://digital.provath.org/api/files')
    ])
    .then(res => {
      this.setState({ items: res[0].data, images: res[1].data })
    })
    .catch(error => console.error(error))
  }
render(){
  const { images, items } = this.state;
  const imgBrowse = {
    maxWidth: '99%',
    margin: 'auto'
  };
  const cardBrowse = {
    display: 'flex',
    justifyContent: 'space-around'
  };
  const singleBrowse = {
    flexBasis: '20%',
    margin: '10px',
    border: '1px #000 solid',
    padding: '5px',
  }
  const getUrl = (x) => {
    let obj  = images.find(image => (image.item.id === x));
    if (obj != undefined){
      return obj.file_urls.square_thumbnail
    } else {
      console.log(x)
      return images[45].file_urls.thumbnail;
    }
  }
  return (
    <div className="row col-md-10 offset-md-1" style={cardBrowse}>
      { items.map(item => {
        return  (
            <div key={item.id} className="card text-center" style={singleBrowse}>
            <Link to={`item/${item.id}`} item={item}>
             <img
             style={imgBrowse}
             src={ getUrl(item.id) }
             alt={item.element_texts[0].text} />
             <div className="card-body">
               <p>{item.element_texts[0].text}</p>
              </div>
              </Link>
              </div>
          )})
        }
      </div>
    )
  }
}
