// Write your code here

import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {random: 0, type: 'Even'}

  handleClick = () => {
    const min = 0
    const rand = min + Math.floor(Math.random() * 100)
    if (rand % 2 === 0) {
      this.setState({random: rand, type: 'Even'})
    } else {
      this.setState({random: rand, type: 'Odd'})
    }
  }

  render() {
    const {random, type} = this.state
    return (
      <div className="container">
        <h1> Count {random}</h1>
        <p>Count is {type}</p>
        <button type="button" onClick={this.handleClick}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
