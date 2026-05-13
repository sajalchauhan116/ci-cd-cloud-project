import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders project heading", () => {
  render(<App />);
  const heading = screen.getByText(/CI\/CD Cloud Project/i);
  expect(heading).toBeInTheDocument();
});