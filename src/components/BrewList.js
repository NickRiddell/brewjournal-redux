import React from 'react'

const BrewItem = ({id, title, stage }) => (
  <li>
    <div className="Brew-Title">{title}</div>
    <div className="Brew-Stage">{stage}</div>
  </li>
)

export default (props) => (
  <div className="Brew-List">
    <ul>
      {props.brews.map(brew => <BrewItem key={brew.id} {...brew} />)}
    </ul>
  </div>
)
