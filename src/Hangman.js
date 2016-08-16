import React, { Component } from 'react'
import './App.css'

class Hangman extends Component {
  render () {
    return <img src={this.props.image} height='200' width='600'/>
  }
}
Hangman.propTypes = {
  image: React.PropTypes.string.isRequired
}
export default Hangman
