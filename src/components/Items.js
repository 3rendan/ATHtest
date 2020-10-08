import React, { Component } from 'react'
import axios from 'axios';

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
  return (
    <div className="row col-md-10 offset-md-1" style={cardBrowse}>
      { items.map(item => {
        return  (
            <div key={item.id} className="card text-center" style={singleBrowse}>
             <img style={imgBrowse} src={images[29].file_urls.thumbnail} alt={item.element_texts[0].text} />
             <div className="card-body">
               <h3>{item.element_texts[0].text}</h3>
               <small> {item.element_texts[5].element.name} : {item.element_texts[5].text}</small>
              </div>
              </div>
          )})
        }
      </div>
    )
  }
}
