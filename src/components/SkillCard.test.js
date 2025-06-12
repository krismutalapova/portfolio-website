import { render, screen } from "@testing-library/react";
import SkillCard from "./SkillCard";

describe("SkillCard", () => {
    it("renders skill name and icon", () => {
        const skill = {
            name: "TypeScript",
            icon: <span data-testid="icon">TS</span>,
            level: 80,
        };
        render(<SkillCard skill={skill} />);
        expect(screen.getByText("TypeScript")).toBeInTheDocument();
        expect(screen.getByTestId("icon")).toBeInTheDocument();
        expect(screen.getByLabelText(/TypeScript proficiency: 80%/i)).toBeInTheDocument();
    });
});
