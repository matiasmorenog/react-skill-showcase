import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "../data/projects";
import { useProjectFilters } from "./useProjectFilters";

describe("useProjectFilters", () => {
  it("returns all projects by default", () => {
    const { result } = renderHook(() => useProjectFilters(projects));

    expect(result.current.filteredProjects).toHaveLength(projects.length);
    expect(result.current.category).toBe("All");
    expect(result.current.level).toBe("All");
    expect(result.current.status).toBe("All");
    expect(result.current.query).toBe("");
  });

  it("filters by query case-insensitively", () => {
    const { result } = renderHook(() => useProjectFilters(projects));

    act(() => {
      result.current.setQuery("crypto");
    });

    expect(result.current.filteredProjects).toHaveLength(1);
    expect(result.current.filteredProjects[0].title).toBe("Crypto Monitor");
  });

  it("applies combined filters and resets to defaults", () => {
    const { result } = renderHook(() => useProjectFilters(projects));

    act(() => {
      result.current.setCategory("Data");
      result.current.setLevel("Advanced");
      result.current.setStatus("Prototype");
    });

    expect(result.current.filteredProjects).toHaveLength(1);
    expect(result.current.filteredProjects[0].title).toBe("Crypto Monitor");

    act(() => {
      result.current.resetFilters();
    });

    expect(result.current.category).toBe("All");
    expect(result.current.level).toBe("All");
    expect(result.current.status).toBe("All");
    expect(result.current.query).toBe("");
    expect(result.current.filteredProjects).toHaveLength(projects.length);
  });
});
