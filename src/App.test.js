import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the header on the page", () => {
    render(<App />);
    const header = screen.getByText(/todo list/i);

    expect(header).toBeInTheDocument();
  });

  it("does not render an empty item in the list", () => {
    render(<App />);
    const button = screen.getByText(/add todo/i);
    const emptyListText = screen.getByText(/Your List Is Empty/i);

    fireEvent.click(button);

    expect(emptyListText).toBeInTheDocument();
  });
});
