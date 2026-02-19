import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders project content and allows filtering by search", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByText("TaskFlow Pro")).toBeInTheDocument();

    const searchInput = screen.getByLabelText("Search");
    await user.type(searchInput, "crypto");

    expect(screen.getByText("Crypto Monitor")).toBeInTheDocument();
    expect(screen.queryByText("TaskFlow Pro")).not.toBeInTheDocument();
  });

  it("shows empty state when filters return no results", async () => {
    const user = userEvent.setup();
    render(<App />);

    const searchInput = screen.getByLabelText("Search");
    await user.type(searchInput, "this should not match anything");

    expect(screen.getByText("No results found")).toBeInTheDocument();
  });

  it("resets filters from the UI", async () => {
    const user = userEvent.setup();
    render(<App />);

    const searchInput = screen.getByLabelText("Search");
    await user.type(searchInput, "crypto");

    expect(screen.queryByText("TaskFlow Pro")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Reset" }));

    expect(screen.getByText("TaskFlow Pro")).toBeInTheDocument();
    expect(screen.queryByText("No results found")).not.toBeInTheDocument();
  });
});
