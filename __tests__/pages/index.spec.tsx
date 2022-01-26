import { render, screen } from "@testing-library/react";
import { StyledApp } from "components/styled";
import Home from "pages/index";

// TODO: Find a way to integrate styled components with jest
describe("Home", () => {
  it("renders a heading", () => {
    render(
      <StyledApp>
        <Home />
      </StyledApp>
    );

    const heading = screen.getByRole("heading", {
      name: /hello world/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
