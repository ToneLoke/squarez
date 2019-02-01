import React, { memo } from 'react'
import './TextInput.scss'
// NOTE: button is disabled unless needed in the future
const TextInput = (props) => {
  const { type } = props;
  return (
    <div className={`Input-wrapper ${type}`}>
      <input {...props} />
      {/* <button type="submit"><span>></span></button> */}
    </div>
  )
}

const arePropsEqual = (prevProps, nextProps) => prevProps.value === nextProps.value

export default memo(TextInput, arePropsEqual)
