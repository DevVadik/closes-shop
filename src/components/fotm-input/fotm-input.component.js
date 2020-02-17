import React from 'react';

import './fotm-input.style.scss'

const FotmInput = ({ handleChange, label, ...otherProps}) => {
  return (
    <div className="group">
      <input 
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {
        label ? 
        (<label className={`${otherProps.value.length ? 'shrink' : ''}  form-input-label`}>
          {label}
        </label>)
        : null
      }
    </div>
  )
}

export default FotmInput
