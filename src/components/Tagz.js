import React, { Component } from 'react'
import axios from 'axios';

class Tagz extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tags: []
    }
  }
  componentDidMount() {
    axios('http://digital.provath.org/api/tags')
    .then(res => {
      this.setState({ tags: res.data })
    })
    .catch(error => console.error(error))
  }
  render() {
    const { tags } = this.state;
    return (
      <div>
      { tags.map(tag => {
        return  (
            <div key={tag.id} className="text-center">
                <h3>{ tag.name }</h3>
            </div>
          )
      })}
      </div>
    )
  }
}

export default Tagz
