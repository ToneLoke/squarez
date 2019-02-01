import React from 'react'
import Header from '../Header';
import './Field.scss'

const Field = ({ children, type, label }) => (
  <div className={`Field ${type}`}>
    <Header name={label} />
    {children}
  </div>
)

export default Field
