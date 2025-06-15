import { render, screen, fireEvent } from "@testing-library/react";
import TagFilter from "./TagFilter";

const allTags = ["All", "React", "TypeScript", "Python"];
const tagIcons = {
    React: <span data-testid="icon-react">R</span>,
    TypeScript: <span data-testid="icon-ts">TS</span>,
    Python: <span data-testid="icon-py">PY</span>,
};

describe("TagFilter", () => {
    it("renders all tag buttons", () => {
        render(
            <TagFilter allTags={allTags} activeTag="All" setActiveTag={() => { }} tagIcons={{}} />
        );
        allTags.forEach((tag) => {
            expect(screen.getByRole("button", { name: new RegExp(tag) })).toBeInTheDocument();
        });
    });

    it("highlights the active tag and sets aria-pressed", () => {
        render(
            <TagFilter allTags={allTags} activeTag="Python" setActiveTag={() => { }} tagIcons={{}} />
        );
        const activeBtn = screen.getByRole("button", { name: /Python/ });
        expect(activeBtn).toHaveAttribute("aria-pressed", "true");
    });

    it("calls setActiveTag when a button is clicked", () => {
        const setActiveTag = jest.fn();
        render(
            <TagFilter allTags={allTags} activeTag="All" setActiveTag={setActiveTag} tagIcons={{}} />
        );
        fireEvent.click(screen.getByRole("button", { name: /Python/ }));
        expect(setActiveTag).toHaveBeenCalledWith("Python");
    });

    it("renders tag icons if provided", () => {
        render(
            <TagFilter allTags={allTags} activeTag="All" setActiveTag={() => { }} tagIcons={tagIcons} />
        );
        expect(screen.getByTestId("icon-react")).toBeInTheDocument();
        expect(screen.getByTestId("icon-ts")).toBeInTheDocument();
        expect(screen.getByTestId("icon-py")).toBeInTheDocument();
    });
});
