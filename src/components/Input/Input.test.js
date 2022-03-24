import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('<Input />', () => {
  it('renders without crashing', () => {
    render(<Input />);
    const inputComponent = screen.getByTestId('todo-input');
    expect(inputComponent).toBeInTheDocument();
  });
});
