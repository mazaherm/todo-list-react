import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import './Input.scss';

const Input = ({
  placeholder,
  buttonText,
  onChange,
  handleKeyPress,
  handleSubmit,
  handleSuggest,
  handleXClick,
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
      <FontAwesomeIcon
        icon={faCircleXmark}
        onClick={handleXClick}
        className='Input__XIcon'
      />
      <button
        type='button'
        onClick={handleSubmit}
        className='Input__Submit'
        data-testid='submit-button'
      >
        {buttonText}
      </button>
      or
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