import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { expect, test, describe, jest, afterEach } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Counter from "../../../src/components/ItemStatusFilter/components/Counter/Counter";
import { setupStore } from "../../../src/redux/store";
import renderer from "react-test-renderer";

describe("Counter tests", () => {
  test("component is rendered", () => {
    const preloadedState = {
      toDoList: {
        elements: [{ id: 1, content: "test1", completed: true }],
      },
    };
    const mockStore = setupStore(preloadedState);

    render(
      <Provider store={mockStore}>
        <Counter />
      </Provider>
    );

    expect(screen.getByTestId("counter")).toBeInTheDocument();
  });

  test("counter shows the right number - 2", () => {
    const preloadedState = {
      toDoList: {
        elements: [
          { id: 1, content: "test1", completed: true },
          { id: 2, content: "test2", completed: true },
          { id: 3, content: "test3", completed: false },
          { id: 4, content: "test4", completed: false },
        ],
      },
    };

    const mockStore = setupStore(preloadedState);

    render(
      <Provider store={mockStore}>
        <Counter />
      </Provider>
    );

    expect(screen.getByText("2 items left")).toBeInTheDocument();
  });

  test("counter shows the right number - 1", () => {
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

    render(
      <Provider store={mockStore}>
        <Counter />
      </Provider>
    );

    expect(screen.getByText("1 items left")).not.toBeNull;
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
          <Counter />
        </Provider>
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
