import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBrews} from '../reducers/brew'

const BrewItem = ({id, title, ingredients, method, initialSG, stage }) => (
  <li>
    <div className="Brew-Title">{title}</div>
    <div className="Brew-Title">{ingredients}</div>
    <div className="Brew-Title">{method}</div>
    <div className="Brew-Title">{initialSG}</div>
    <div className="Brew-Stage">{stage}</div>
  </li>
)

class BrewList extends Component {
  componentDidMount() {
    this.props.fetchBrews()
  }
  render() {
    return (
      <div className="Brew-List">
        <ul>
          {this.props.brews.map(brew => <BrewItem key={brew.id} {...brew} />)}
        </ul>
      </div>
    )
  }
}



export default connect(
  (state) => ({brews: state.brews}),
  {fetchBrews}
)(BrewList)
