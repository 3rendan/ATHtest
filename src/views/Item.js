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
      <h1>info about single item</h1>
    </div>
  )
}}
