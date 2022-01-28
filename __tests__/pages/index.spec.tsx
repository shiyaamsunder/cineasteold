import { StyledApp } from "@components/styled";
import Home from "@pages/index";
import { render, screen } from "@testing-library/react";

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

    // expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle(`font-size: 48px; color:palevioletred`);
  });
});
