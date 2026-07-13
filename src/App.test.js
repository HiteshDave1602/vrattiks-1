import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the global chatbot launcher', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /open chatbot/i })).toBeInTheDocument();
});
