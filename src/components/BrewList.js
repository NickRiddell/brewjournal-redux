import React from 'react';
import {connect} from 'react-redux';

const BrewItem = ({id, title, stage }) => (
  <li>
    <div className="Brew-Title">{title}</div>
    <div className="Brew-Stage">{stage}</div>
  </li>
)

const BrewList = (props) => (
  <div className="Brew-List">
    <ul>
      {props.brews.map(brew => <BrewItem key={brew.id} {...brew} />)}
    </ul>
  </div>
)

export default connect(
  (state) => ({brews: state.brews})
)(BrewList)
