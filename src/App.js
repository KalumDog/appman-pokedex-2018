import React, { Component } from 'react'
import './App.css'
import Footer from './component/Footer'
import Modal from './component/Modal'
import Pokedex from './component/Pokedex'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal>
          <Pokedex />
        </Modal>
        <Footer />
      </div>
    )
  }
}

export default App
