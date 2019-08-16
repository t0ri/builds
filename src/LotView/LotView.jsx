import React, { Component } from 'react'

import './lotview.css'

export default class LotView extends Component {
  constructor(props) {
    super(props)

    // Binding `this`
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ redirect: true })
  }
  
  render() {
    console.log(this.props)
    if (this.props.id === undefined) {
      return "Loading Lot!"
    }

    const {
      name,
      description,
      gallery,
      lot_type: lotType,
      bedrooms,
      bathrooms,
      sims,
      images,

      clearLot
    } = this.props
    return (
      <div id="lot-view-container">
        <div id="top">
          <span id="back" onClick={e => clearLot()}>
            {window.location.pathname.substr(1)}'s Builds
          </span>
        </div>
        <div id="lot-view">
          <img src={images} alt="Sims Build" />
          <h1>{name}</h1>
          <p id="lot-type">{lotType} Lot</p>
          { lotType === 'Residential' &&
            <p id="lot-numbers">{bedrooms} bedrooms / {bathrooms} bathrooms / sleeps {sims} sims</p>
          }
          { lotType === 'Rental' &&
            <p id="lot-numbers">{bedrooms} bedrooms / {bathrooms} bathrooms / sleeps {sims} sims</p>
          }
          <p id="lot-description">{description}</p>
          <p id="lot-link"><a href={gallery} target="_blank">View on the Sims 4 Gallery</a></p>
        </div>
      </div>
    )
  }
}
