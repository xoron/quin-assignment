import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import AppDrawer from "../AppDrawer";

describe("AppDrawer tests", () => {
  it("open the nav menu with the toggle button", async () => {
    const { container, findByTestId, getByTestId } = render(
      <MemoryRouter>
        <AppDrawer>
          <span>hello world</span>
        </AppDrawer>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot("app-drawer.png");
    expect(await findByTestId("toggle-nav")).toBeInTheDocument();
    expect(await findByTestId("chevron-left")).toBeInTheDocument();

    fireEvent.click(
      await findByTestId("toggle-nav"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
  });
});
