import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const addTodo = (todos) => {
  const input = screen.getByPlaceholderText(/enter a todo/i);
  const button = screen.getByRole('button', { buttonText: /add todo/i });
  todos.forEach(todo => {
    fireEvent.change(input, { target: { value: todo }});
    fireEvent.click(button);
  })
}

describe('App integration tests', () => {
  it('renders a todo in the list', () => {
    render(<App />);
    addTodo(['this is my first todo'])
    const listItem = screen.getByText(/this is my first todo/i);
  
    expect(listItem).toBeInTheDocument();
  });
  
  it('renders multiple todos in the list', () => {
    render(<App />);
    addTodo(['this is my first todo', 'this is 2nd todo', 'and this is my THIRD todo'])
    const listItem = screen.getAllByTestId('list-items');
  
    expect(listItem.length).toBe(3);
  })

  it('does not render an empty item in the list', () => {
    render(<App />);
    addTodo(['']);
    const emptyListText = screen.getByText(/Your List Is Empty/i);

    expect(emptyListText).toBeInTheDocument();
  })

  it('deletes a todo from the rendered list', () => {
    render(<App />);
    addTodo(['this is my first todo']);
    const todoItem = screen.getByText(/this is my first todo/i)
    const listIcon = screen.getByTitle('list-icon')

    fireEvent.click(listIcon)

    expect(todoItem).not.toBeInTheDocument();
  })
})
