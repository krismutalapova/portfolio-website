import { render, screen } from '@testing-library/react';
import Header from './shared/Header';

describe('Header', () => {
    it('renders header with name', () => {
        render(<Header />);
        const heading = screen.getByText(/kristina mutalapova/i);
        expect(heading).toBeInTheDocument();
    });
});
