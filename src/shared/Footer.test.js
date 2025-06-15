import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    it('renders copyright', () => {
        render(<Footer />);
        expect(screen.getByText(/kristina mutalapova/i)).toBeInTheDocument();
    });

    it('renders social and contact links', () => {
        render(<Footer />);
        expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/download cv/i)).toBeInTheDocument();
    });

    it('renders the footer as a contentinfo landmark', () => {
        render(<Footer />);
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
});
