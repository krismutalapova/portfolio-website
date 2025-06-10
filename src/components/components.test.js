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

describe('Navbar', () => {
    it('renders navigation links', () => {
        render(<Navbar />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
});

describe('Footer', () => {
    it('renders copyright', () => {
        render(<Footer />);
        expect(screen.getByText(/kristina mutalapova/i)).toBeInTheDocument();
    });
});

describe('AboutMe', () => {
    it('renders section with heading', () => {
        render(<AboutMe />);
        expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
    });
});

describe('Projects', () => {
    it('renders section with project title', () => {
        render(<Projects />);
        expect(screen.findByText(/todo app/i)).resolves.toBeInTheDocument();
    });
});

describe('NotFound', () => {
    it('renders 404 page', () => {
        render(<NotFound />);
        expect(screen.getByText('404')).toBeInTheDocument();
        expect(screen.getByText(/does not exist/i)).toBeInTheDocument();
    });
});
