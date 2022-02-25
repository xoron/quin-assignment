import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";
import React from "react";

jest.mock("@apollo/client", () => ({
  gql: jest.fn(),
  useQuery: jest.fn().mockReturnValue({
    data: {
      stock: {
        milk: 1111,
        skins: 4,
      },
    },
  }),
  useMutation: jest.fn().mockReturnValue([
    jest.fn(),
    {
      data: {
        stock: {
          milk: 1111,
          skins: 4,
        },
      },
    },
  ]),
}));

describe("App component", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the app component", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot("app.png");
  });

  it("can navigate to launches pages", async () => {
    const {
      container,
      findByTestId,
      findByText,
      getByText,
      queryByText,
      getByLabelText,
      getByTestId,
    } = render(<App />);
    expect(
      await findByText("Welcome to the Moonshot Calendar Inc.")
    ).toBeInTheDocument();

    fireEvent.click(
      await findByTestId("nav-launches-button"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    // set date range
    const startDateInput = getByTestId("launch-from-date-input").querySelector(
      "input"
    ) as HTMLInputElement;
    fireEvent.change(startDateInput, { target: { value: "01/01/2022" } });
    expect(startDateInput.value).toBe("01/01/2022");
    const endDateInput = getByTestId("launch-to-date-input").querySelector(
      "input"
    ) as HTMLInputElement;
    fireEvent.change(endDateInput, { target: { value: "01/10/2022" } });
    expect(endDateInput.value).toBe("01/10/2022");
  });
});
