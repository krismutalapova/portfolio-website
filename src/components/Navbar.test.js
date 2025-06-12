import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

// Mock matchMedia for all tests in this file
beforeEach(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
        matches: false,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }));
});

describe("Navbar", () => {
    it("renders navigation links", () => {
        render(<Navbar />);
        expect(screen.getByRole("navigation")).toBeInTheDocument();
        expect(screen.getByText(/about/i)).toBeInTheDocument();
        expect(screen.getByText(/projects/i)).toBeInTheDocument();
        expect(screen.getByText(/contact/i)).toBeInTheDocument();
    });

    it("renders theme toggle button", () => {
        render(<Navbar />);
        expect(screen.getByLabelText(/toggle theme/i)).toBeInTheDocument();
    });
});
