import { render, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';

import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

const setup = (state = {}) => {
  const utils = render(<ListItem {...state} />);
  const listItem = utils.getByRole('listitem');
  return {
    listItem,
    ...utils
  }
}

describe('list item component', () => {
  it('renders without errors', () => {
    const { listItem } = setup();
    expect(listItem).toBeInTheDocument();
  });

  it('renders list item text', () => {
    const { getByText } = setup({ listItemText: 'this is a list item' })

    expect(getByText(/this is a list item/i)).toBeInTheDocument();
  });
});

describe('list item icon', () => {
  it('renders a trash can icon', () => {
    const { getByTitle } = setup({ fontAwesomeIcon: faTrashCan });

    expect(getByTitle('list-icon')).toBeInTheDocument();
  });

  it('calls handleListIconClick on icon click', () => {
    const handleListIconClick = jest.fn();
    const { getByTitle } = setup({ fontAwesomeIcon: faTrashCan, handleListIconClick: handleListIconClick })

    fireEvent.click(getByTitle('list-icon'));

    expect(handleListIconClick).toHaveBeenCalled();
  })
})
