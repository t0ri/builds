import React, { Component } from 'react'

import './lotcard.css'

export default class LotCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      click: false,
    }

    // Binding `this`
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.openLot(this.props.id)
  }
  
  render() {
    const {
      images,
      lot_type: lotType,
      name,
      bedrooms,
      bathrooms
    } = this.props

    return (
      <div className="lot-card">
        <img src={images} alt={name}></img>
        <h5 onClick={this.handleClick}>{name}</h5>
        <p>{lotType}</p>
        <p>{bedrooms} beds, {bathrooms} baths</p>
      </div>
    )
  }
}
