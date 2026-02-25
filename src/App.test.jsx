import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import PortfolioPage from "../app/portfolio-page";

describe("App", () => {
  it("renders project content and allows filtering by search", async () => {
    const user = userEvent.setup();
    render(<PortfolioPage />);

    expect(screen.getByText("TaskFlow Pro")).toBeInTheDocument();

    const searchInput = screen.getByLabelText("Search");
    await user.type(searchInput, "analytics");

    expect(screen.getByText("E-commerce Analytics")).toBeInTheDocument();
    expect(screen.queryByText("TaskFlow Pro")).not.toBeInTheDocument();
  });

  it("shows empty state when filters return no results", async () => {
    const user = userEvent.setup();
    render(<PortfolioPage />);

    const searchInput = screen.getByLabelText("Search");
    await user.type(searchInput, "this should not match anything");

    expect(screen.getByText("No results found")).toBeInTheDocument();
  });

  it("resets filters from the UI", async () => {
    const user = userEvent.setup();
    render(<PortfolioPage />);

    const searchInput = screen.getByLabelText("Search");
    await user.type(searchInput, "analytics");

    expect(screen.queryByText("TaskFlow Pro")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Reset" }));

    expect(screen.getByText("TaskFlow Pro")).toBeInTheDocument();
    expect(screen.queryByText("No results found")).not.toBeInTheDocument();
  });
});
