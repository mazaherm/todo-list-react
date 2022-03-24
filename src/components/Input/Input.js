import React, { useState } from 'react'

const Input = ({
  placeholder,
  buttonText,
  handleSubmit,
}) => {
  const [value, setValue] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      setValue(event.target.value);
    }
  }

  return (
    <div data-testid='todo-input' className='Input'>
      <input
        type='text'
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
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