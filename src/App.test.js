import { render, screen } from '@testing-library/react';
import App from './App';

import { BrowserRouter} from "react-router-dom"

describe('execute all test in App.test', () => {
  test('renders learn react link', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkElement = screen.getByText(/Podcaster/i);
    expect(linkElement).toBeInTheDocument();
  });
})

