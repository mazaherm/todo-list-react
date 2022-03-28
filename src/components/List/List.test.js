import { render } from '@testing-library/react';
import List from './List';

const setup = (state = {}) => {
  const utils = render(<List {...state} />);
  const list = utils.getByRole('list');
  return {
    list,
    mockListItems,
    ...utils
  }
}

const mockListItems = [
  { todo: 'this is my first todo', id: 1 },
  { todo: 'this is my 2nd todo', id: 2 },
  { todo: 'this is my THIRD todo', id: 3 },
]

describe('list component', () => {
  it('renders without errors', () => {
    const { list } = setup({ listItems: mockListItems });
    expect(list).toBeInTheDocument();
  });

  it('renders list with three items', () => {
    const { list } = setup({ listItems: mockListItems });
    
    expect(list.querySelectorAll('li').length).toEqual(3)
  });

  it('does not render list if array is empty', () => {
    const { getByText } = setup({ listItems: [] });

    expect(getByText(/your list is empty/i)).toBeInTheDocument();
  })
});
