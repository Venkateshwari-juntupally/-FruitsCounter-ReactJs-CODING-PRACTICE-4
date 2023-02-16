// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    countMango: 0,
    countBanana: 0,
  }

  eatMango = () => {
    this.setState(prevState => ({
      countMango: prevState.countMango + 1,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      countBanana: prevState.countBanana + 1,
    }))
  }

  render() {
    const {countMango, countBanana} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="count">{countMango}</span> mangoes{' '}
            <span className="count">{countBanana}</span> bananas
          </h1>
          <div className="mango-banana">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango-img"
              />
              <button type="button" className="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="banana-img"
              />
              <button type="button" className="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
