import React, { Component } from 'react'
import axios from 'axios';

class Metadata extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }
  componentDidMount() {
    axios('http://digital.provath.org/api/items')
    .then(res => {
      this.setState({ items: res.data })
    })
    .catch(error => console.error(error))
  }

  render() {
    const { items } = this.state;
    console.log(items);

    return (
      <div>
      { items.map(item => {
        return  (
            <div key={item.id} className="text-center">
                <h3>{ item.id }</h3>
                <h3>{ item.url }</h3>
            </div>
          )
      })}
      </div>
    )
  }
}

export default Metadata
