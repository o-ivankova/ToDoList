import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { expect, test, describe, jest, afterAll } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import FilterButtons from "../../../src/components/ItemStatusFilter/components/FilterButtons/FilterButtons";
import { setupStore } from "../../../src/redux/store";
import renderer from "react-test-renderer";

describe("FilterButtons tests", () => {
  test("component is rendered", () => {
    const preloadedState = {
      toDoList: {
        filter: "all",
      },
    };

    const mockStore = setupStore(preloadedState);

    render(
      <Provider store={mockStore}>
        <FilterButtons />
      </Provider>
    );

    expect(screen.getByTestId("filter-buttons")).toBeInTheDocument();
  });

  test("all 3 buttons are rendered", () => {
    const preloadedState = {
      toDoList: {
        filter: "all",
      },
    };

    const mockStore = setupStore(preloadedState);

    render(
      <Provider store={mockStore}>
        <FilterButtons />
      </Provider>
    );

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  test("the completed button is active from the start", () => {
    const preloadedState = {
      toDoList: {
        filter: "completed",
      },
    };

    const mockStore = setupStore(preloadedState);

    render(
      <Provider store={mockStore}>
        <FilterButtons />
      </Provider>
    );

    expect(screen.getByText("Completed")).toHaveClass("filterButtonActive");
  });

  test("the active button is clicked", () => {
    const preloadedState = {
      toDoList: {
        filter: "all",
      },
    };

    const mockStore = setupStore(preloadedState);
    localStorage.setItem(
      "filter",
      JSON.stringify(preloadedState.toDoList.filter)
    );

    render(
      <Provider store={mockStore}>
        <FilterButtons />
      </Provider>
    );
    fireEvent.click(screen.getByText("Active"));

    const expectedFilter = "active";
    const filter = JSON.parse(localStorage.getItem("filter"));
    expect(filter).toEqual(expectedFilter);
  });

  test("snapshot test", () => {
    const preloadedState = {
      toDoList: {
        elements: [
          { id: 1, content: "test1", completed: true },
          { id: 2, content: "test2", completed: true },
          { id: 3, content: "test3", completed: false },
        ],
      },
    };
    const mockStore = setupStore(preloadedState);

    const domTree = renderer
      .create(
        <Provider store={mockStore}>
          <FilterButtons />
        </Provider>
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
