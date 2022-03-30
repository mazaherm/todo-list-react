import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ListItem.scss';

const ListItem = ({
  handleListIconClick,
  listItemText,
  fontAwesomeIcon,
}) => {
  return (
    <div className='ListItem' >
      <li
        className='ListItem__Item'
        data-testid='list-items'
      >
          {listItemText}
      </li>
      <FontAwesomeIcon
        icon={fontAwesomeIcon}
        onClick={handleListIconClick}
        title='list-icon'
        className='ListItem__Icon'
      />
    </div>
  );
}

export default ListItem