import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

const setup = (state = {}) => {
  const utils = render(<Input {...state}/>)
  const input = utils.getByRole('textbox');
  return {
    input,
    ...utils
  }
}

describe('the input box', () => {
  it('renders the component without errors', () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
  });
  
  it('allows me to type text into the input', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'this is a todo' } });
  
    expect(input.value).toBe('this is a todo');
  });
  
  it('displays a placeholder when there is a placeholder prop used', () => {
    const { input } = setup({ placeholder: 'this is placeholder text'});
  
    expect(input).toHaveAttribute("placeholder", "this is placeholder text")
  });

  it('calls onKeyPress prop on press of Enter key', () => {
    const onKeyPress = jest.fn();
    const { input } = setup({ handleKeyPress: onKeyPress });

    fireEvent.keyPress(input, { key: 'Enter', charCode: 13 });
    expect(onKeyPress).toHaveBeenCalled();
  })
});

describe('the submit button', () => {
  it('renders the component without errors', () => {
    const utils = render(<Input />)
    const submitButton = utils.getByTestId('submit-button');
    const suggestButton = utils.getByTestId('suggest-button');

    expect(submitButton).toBeInTheDocument();
    expect(suggestButton).toBeInTheDocument();
  });

  it('calls onClick prop on button click', () => {
    const onClick = jest.fn();
    const { getByText } = setup({ buttonText: 'Click Me', handleSubmit: onClick })

    fireEvent.click(getByText(/click me/i));
    expect(onClick).toHaveBeenCalled();
  })
});
