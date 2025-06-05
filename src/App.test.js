import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';

test('renders header with name', () => {
  render(<Header />);
  const heading = screen.getByText(/kristina mutalapova/i);
  expect(heading).toBeInTheDocument();
});
