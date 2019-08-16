import React from 'react'
import './home.css'
function Home(props) {
  let alert
  if (props.message === 'lots') {
    alert = `User "${window.location.pathname.substr(1)}" has no lots!`
  }

  return (
    <div id="home">
      <div id="message">
        <h1>Builds</h1>
        <p id="alert">{alert}</p>
        <p>Enter a username in the address bar to visit a profile:</p>
        <a href="https://builds-gallery.herokuapp.com/tori">
          <pre>https://builds-gallery.herokuapp.com/tori</pre>
        </a>
      </div>
    </div>
  )
}
export default Home
