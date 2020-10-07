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
  return (
    <div>
      { items.map(item => {
        return  (
            <div key={item.id} className="text-center card">
              <h1>{item.id}</h1>
               {console.log(item.id)}
                <small> {item.element_texts[0].element.name} : {item.element_texts[0].text}</small>
                <small> {item.element_texts[1].element.name} : {item.element_texts[1].text}</small>
                <small> {item.element_texts[2].element.name} : {item.element_texts[2].text}</small>
                <small> {item.element_texts[3].element.name} : {item.element_texts[3].text}</small>
                <small> {item.element_texts[4].element.name} : {item.element_texts[4].text}</small>
                <small> {item.element_texts[5].element.name} : {item.element_texts[5].text}</small>
                <small> {item.element_texts[13].element.name} : {item.element_texts[13].text}</small>
                <img src={images[`${item.id}`].file_urls.thumbnail} alt={item.element_texts[0].text} />


            </div>
          )})
        }
      </div>
    )
  }
}
