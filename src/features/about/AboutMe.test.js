import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AboutMe from "./AboutMe";

describe("AboutMe", () => {
  it("renders section with heading", () => {
    render(<AboutMe />);
    expect(
      screen.getByRole("heading", { name: /about me/i }),
    ).toBeInTheDocument();
  });

  it("renders Skills, Experience, and Education panels", () => {
    render(<AboutMe />);
    expect(screen.getByRole("button", { name: /skills/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /experience/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /education/i }),
    ).toBeInTheDocument();
  });

  it("toggles Skills panel open/close", async () => {
    render(<AboutMe />);
    const btn = screen.getByRole("button", { name: /skills/i });
    fireEvent.click(btn);
    const skillSpans = await screen.findAllByText("TypeScript", {
      exact: true,
    });
    expect(skillSpans.length).toBeGreaterThan(0);
    fireEvent.click(btn);
    // Wait for the panel to close before asserting
    await waitFor(() => {
      expect(screen.queryByText("TypeScript", { exact: true })).toBeNull();
    });
  });

  it("renders at least one experience and education entry", () => {
    render(<AboutMe />);
    fireEvent.click(screen.getByRole("button", { name: /experience/i }));
    fireEvent.click(screen.getByRole("button", { name: /education/i }));
    expect(screen.getAllByText(/@/i).length).toBeGreaterThan(0);
  });
});
