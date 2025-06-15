import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound", () => {
    it("renders 404 page", () => {
        render(<NotFound />);
        expect(screen.getByText("404")).toBeInTheDocument();
        expect(screen.getByText(/does not exist/i)).toBeInTheDocument();
    });

    it("renders Go Home link with correct href", () => {
        render(<NotFound />);
        const link = screen.getByRole("link", { name: /go home/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/");
    });

    it("renders main container with correct classes", () => {
        render(<NotFound />);
        const container = screen.getByText("404").closest("div");
        expect(container).toHaveClass("min-h-screen");
        expect(container).toHaveClass("bg-white");
        expect(container).toHaveClass("dark:bg-gray-900");
    });

    it("renders a heading for accessibility", () => {
        render(<NotFound />);
        expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
    });
});
