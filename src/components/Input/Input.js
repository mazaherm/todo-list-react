import React, { useState } from 'react'

import './Input.scss';

const Input = ({
  placeholder,
  buttonText,
  onChange,
  handleKeyPress,
  handleSubmit,
  value
}) => {
  return (
    <div data-testid='todo-input' className='Input'>
      <input
        type='text'
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        value={value}
        className='Input__Element'
      />
      <button
        type='button'
        onClick={handleSubmit}
        className='Input__Submit'
      >
        {buttonText}
      </button>
    </div>
  )
}

export default Input