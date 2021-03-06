import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "more" link', () => {
  render(<App />);
  const linkElement = screen.getByText(/More on CI/i);
  expect(linkElement).toBeInTheDocument();
});
