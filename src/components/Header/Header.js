import React from 'react';

import './Header.scss';

const Header = ({
  bgImage,
  heading,
}) => {
  return (
    <header className='Banner'>
      <img alt={heading} src={bgImage} className='Banner__Img' />
      <h1  className='Banner__Heading'>{heading}</h1>
    </header>
  )
}

export default Header;
