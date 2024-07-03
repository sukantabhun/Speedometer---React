import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed + 10 <= 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed - 10 >= 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h2 className="sub-heading">Speed is {speed}mph</h2>
        <p className="paragraph">Min Limit is 0mph. Max Limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            onClick={this.onAccelerate}
            className="accelerate-button"
          >
            Accelerate
          </button>
          <button type="button" onClick={this.onBrake} className="brake-button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
