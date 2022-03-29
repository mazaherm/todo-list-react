import React from 'react';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

import ListItem from './ListItem';

import './List.scss';

const List = ({
  listItems,
  onRemove
}) => {
  return (
    listItems.length ? (
      <ul className='List'>
        {listItems.map(item => (
          <ListItem
            key={item.id}
            listItemText={item.todo}
            fontAwesomeIcon={faTrashCan}
            handleListIconClick={() => onRemove(item.id)}
          />
        ))}
      </ul>
    ) : (
      <ul className='List__Empty'>
        Your list is empty
      </ul>
    )
  )
}

export default List
