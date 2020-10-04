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

        console.log()
        return  (
            <div key={item.id} className="text-center card-4">
                <small> {item.element_texts[0].element.name} : {item.element_texts[0].text}</small>
                <small> {item.element_texts[1].element.name} : {item.element_texts[1].text}</small>
                <small> {item.element_texts[2].element.name} : {item.element_texts[2].text}</small>
                <small> {item.element_texts[3].element.name} : {item.element_texts[3].text}</small>
                <small> {item.element_texts[4].element.name} : {item.element_texts[4].text}</small>
                <small> {item.element_texts[5].element.name} : {item.element_texts[5].text}</small>
                <small> {item.element_texts[6].element.name} : {item.element_texts[6].text}</small>

            </div>
          )
      })}
      </div>
    )
  }
}

export default Items
