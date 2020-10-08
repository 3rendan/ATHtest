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
  // using id as param passed from items.js link rather than Map function
  return (
    <div>
      <!-- using id as param passed from items.js link rather than Map function -->
        return  (
            <div key={item.id} className="text-center card">
              <h1>{item.id}</h1>
               {console.log(item.id)}
               <img src={images[29].file_urls.thumbnail} alt={item.element_texts[0].text} />
                <h4> {item.element_texts[0].element.name} : {item.element_texts[0].text}</h4>
                <h4> {item.element_texts[1].element.name} : {item.element_texts[1].text}</h4>
                <h4> {item.element_texts[2].element.name} : {item.element_texts[2].text}</h4>
                <h4> {item.element_texts[3].element.name} : {item.element_texts[3].text}</h4>
                <h4> {item.element_texts[4].element.name} : {item.element_texts[4].text}</h4>
                <h4> {item.element_texts[5].element.name} : {item.element_texts[5].text}</h4>
                <h4> {item.element_texts[13].element.name} : {item.element_texts[13].text}</h4>

            </div>
          )})
