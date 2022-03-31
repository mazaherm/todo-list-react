import React from 'react'

import './Input.scss';

const Input = ({
  placeholder,
  buttonText,
  onChange,
  handleKeyPress,
  handleSubmit,
  handleSuggest,
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
        data-testid='submit-button'
      >
        {buttonText}
      </button>
      <button
        type='button'
        onClick={handleSuggest}
        className='Input__Suggest'
        data-testid='suggest-button'
      >
        + Suggest Todo
      </button>
    </div>
  )
}

export default Input