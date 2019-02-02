import React from 'react'
import './Button.scss'

export default ({ children, handleClick }) => (
  <div className="btn" onClick={handleClick} role="button">
    { children }
  </div>
)
