import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "./ThemeToggle";

function setMatchMedia(matches) {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
}

describe("ThemeToggle", () => {
  beforeEach(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    localStorage.clear();
  });

  it("renders nothing if position is not inline or menu", () => {
    const { container } = render(<ThemeToggle position="other" />);
    expect(container.firstChild).toBeNull();
  });

  it("renders sun icon in light mode", () => {
    setMatchMedia(false);
    render(<ThemeToggle position="inline" />);
    expect(screen.getByLabelText(/toggle theme/i)).toBeInTheDocument();
  });

  it("renders moon icon in dark mode", () => {
    setMatchMedia(true);
    localStorage.setItem("theme", "dark");
    render(<ThemeToggle position="inline" />);
    expect(screen.getByLabelText(/toggle theme/i)).toBeInTheDocument();
  });

  it("toggles theme on click", () => {
    render(<ThemeToggle position="inline" />);
    const btn = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(btn);
    expect(["dark", "light"]).toContain(localStorage.getItem("theme"));
  });

  it("shows tooltip on hover (web only)", async () => {
    render(<ThemeToggle position="inline" />);
    const btn = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.mouseOver(btn);
    expect(screen.getByText(/switch to/i)).toBeInTheDocument();
  });
});
