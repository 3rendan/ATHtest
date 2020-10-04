import React, { Component } from 'react'
import axios from 'axios';

class Items extends Component {
  state = {
      items: [],
      images: []
  };



  render() {
    function getData () {
      axios.all([
        axios.get('http://digital.provath.org/api/items'),
        axios.get('http://digital.provath.org/api/files')
      ])
      .then(res => {
        this.setState({ items: res[0].data, images: res[1].data })
      })
      .catch(error => console.error(error))
    }
    getData();
    console.log('hello')



    return (
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}

export default Items
