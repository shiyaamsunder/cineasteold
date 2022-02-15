import { render, screen } from "@testing-library/react";

import { Layout } from "@components";
import Home from "@pages/index";

// TODO: Find a way to integrate styled components with jest
describe("Home", () => {
  it("renders a heading", () => {
    render(
      <Layout themeName="defaultTheme">
        <Home />
      </Layout>
    );

    const heading = screen.getByRole("heading", {
      name: /cineaste/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
