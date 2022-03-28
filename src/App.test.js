import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByRole('banner');
  expect(linkElement).toBeInTheDocument();
});
