import React, { Component } from 'react'
import axios from 'axios';

class Items extends Component {
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
    console.log(this.state.data);

    return (
      <div>
      { items.map(item => {
        return  (
            <div key={item.id} className="text-center">
                <h3>{ item.id }</h3>
                <h3>{ item.url }</h3>
                {console.log(item.element_texts)}


            </div>
          )
      })}
      </div>
    )
  }
}

export default Items
