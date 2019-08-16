import React, { Component } from 'react'

import Home from './Home/Home'
import LotCard from './LotCard/LotCard'
import LotView from './LotView/LotView'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: undefined,
      lots: undefined,
      lot: undefined,
    }

    // Binding `this`
    this.getProfileData = this.getProfileData.bind(this)
    this.getLotData = this.getLotData.bind(this)
    this.openLot = this.openLot.bind(this)
    this.clearLot = this.clearLot.bind(this)
    this.clearUser = this.clearUser.bind(this)
  }

  componentDidMount() {
    // Get route from URL on mount
    this.getRoute()
  }

  componentDidUpdate() {
    const { user, lots, lot } = this.state
    // If user is set, but lots aren't yet retrieved
    if (user && !lots) {
      this.getProfileData()
    }
    if (lot) {
      // If lot only holds an ID
      if (typeof lot == 'number') {
        this.getLotData()
      }
    }
  }

  getRoute() {
    // Get Route from URL
    const route = window.location.pathname
    // If Route starts with '/', get following string
    if (route[0] === '/') {
      this.setState({ user: route.substr(1) })
    }
  }

  async getProfileData() {
    const { user } = this.state

    // Send GET request to API with user's data from state
    const rawResponse = await fetch(`api/lots/user/${user}`, { method: 'GET' })

    if (await rawResponse.status === 200) {
      // Parse response to JSON
      const content = await rawResponse.json()

      // Set `this.state.lots` to content
      this.setState({ lots: await content })
    } else if (await rawResponse.status === 404) {
      this.setState({ lots: 404 })
    }
  }

  async getLotData() {
    const { lot } = this.state
    // Send GET request to API with user's data from props
    const rawResponse = await fetch(`api/lots/${lot}`, { method: 'GET' })

    if (await rawResponse.status === 200) {
      // Parse response to JSON
      const content = await rawResponse.json()

      // Set `this.state.lot` to content
      this.setState({ lot: await content })
    } else {
      // If API doesn't respond to GET request
      this.setState({ lots: 404 })
    }
  }

  mapLots() {
    const { lots } = this.state

    // Map lots into cards
    if (lots) {
      return lots.map(lot => (
        <LotCard {...lot} openLot={this.openLot} />
      ))
    } else {
      return 'Loading Lots!'
    }
  }

  openLot(id) {
    this.setState({ lot: id })
  }

  clearLot() {
    this.setState({ lot: undefined })
  }

  clearUser() {
    // Clear all state to rerender Home page
    // TODO: manipulate URL to reflect cleared username
    this.setState({ user: undefined })
    this.setState({ lots: undefined })
    this.setState({ lot: undefined })
  }
  
  render() {
    const { lots, lot, user } = this.state
    if (lot) {
      return <LotView {...lot} clearLot={this.clearLot} />
      // return component containing the lot
      // when X is clicked in corner, clear `this.state.lot`
    }
    // If lots has value
    if (lots) {
      // If the API returned 404, return Home with a no-lots prop
      if (lots === 404) {
        return <Home message="lots" />
      }
      return (
        <div id="lot-cards-view">
          <h1 onClick={this.clearUser}>Builds</h1>
          <h2>from {user}</h2>
          <div id="lot-cards">
            {this.mapLots()}
          </div>
        </div>
      )
    }
    // Else, return Home
    return (
      <Home />
    )
  }
}
