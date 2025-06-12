import { render, screen, waitFor, queryByText } from "@testing-library/react";
import Projects from "./Projects";

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

describe("Projects", () => {
  it("renders section with project title", async () => {
    render(<Projects />);
    // Wait for the spinner to disappear
    await waitFor(
      () => expect(screen.queryByRole("status")).not.toBeInTheDocument(),
      { timeout: 2000 },
    );
    expect(await screen.findByText(/todo app/i)).toBeInTheDocument();
  });
});
