import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Projects from './Projects';
import NotFound from './NotFound';

global.matchMedia = global.matchMedia || function () {
    return {
        matches: false,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
    };
};

it('renders Navbar with navigation links', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
});

it('renders Footer with copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/kristina mutalapova/i)).toBeInTheDocument();
});

it('renders AboutMe section with heading', () => {
    render(<AboutMe />);
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
});

it('renders Projects section with project title', () => {
    render(<Projects />);
    expect(screen.findByText(/todo app/i)).resolves.toBeInTheDocument();
});

it('renders NotFound page with 404', () => {
    render(<NotFound />);
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText(/does not exist/i)).toBeInTheDocument();
});
