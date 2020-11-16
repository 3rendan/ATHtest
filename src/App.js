import React, { Component } from 'react';
import axios from 'axios';
import Item from './views/Item'
import Items from './views/Items'
/**
 * App
 */
export class App extends Component { // eslint-disable-line react/prefer-stateless-function
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
  render() {
    return (
      <div className="container">
        <Items items={this.state.items} images={this.state.images}/>
        <Item items={this.state.items} images={this.state.images}/>

      </div>
    );
  }
}

export default App;
