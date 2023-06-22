import React from "react";
import "@testing-library/jest-dom";
import { jest, expect, test, describe, afterAll, afterEach } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import ToDoList from "../../../src/components/ToDoList/ToDoList";
import { Provider } from "react-redux";
import { setupStore } from "../../../src/redux/store";
import renderer from "react-test-renderer";

describe("ToDoList tests", () => {
  test("component is rendered", () => {
    const preloadedState = {
      toDoList: {
        filter: "all",
        elements: [],
      },
    };
    const mockStore = setupStore(preloadedState);

    render(
      <Provider store={mockStore}>
        <ToDoList />
      </Provider>
    );

    expect(screen.getByTestId("list")).toBeInTheDocument();
  });

  test("ToDoListItems are rendered", () => {
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
        <ToDoList />
      </Provider>
    );

    expect(screen.findByText("test1")).not.toBeNull;
    expect(screen.findByText("test2")).not.toBeNull;
    expect(screen.findByText("test3")).not.toBeNull;
    expect(screen.findByText("test4")).not.toBeNull;
  });

  test("checkbox click", () => {
    const preloadedState = {
      toDoList: {
        elements: [{ id: 1, content: "test1", completed: false }],
      },
    };
    const mockStore = setupStore(preloadedState);

    render(
      <Provider store={mockStore}>
        <ToDoList />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("checkbox"));

    const elementsInLocalStorage = JSON.parse(
      localStorage.getItem("toDoElements")
    );

    expect(elementsInLocalStorage[0].completed).toBe(true);
    expect(screen.getByTestId("checkbox").checked).toBe(true);
    expect(screen.getByTestId("to-do-list-item")).toHaveClass("todoListItemCompleted");
  });

  test("filter change", () => {
    const preloadedState = {
      toDoList: {
        elements: [
          { id: 1, content: "test1", completed: false },
          { id: 2, content: "test2", completed: true },
        ],
        filter: "completed",
      },
    };
    const mockStore = setupStore(preloadedState);

    render(
      <Provider store={mockStore}>
        <ToDoList />
      </Provider>
    );

    expect(screen.queryByText("test1")).not.toBeInTheDocument();
    expect(screen.getByText("test2")).toBeInTheDocument();
  });

  test("snapshot test", () => {
    const preloadedState = {
      toDoList: {
        elements: [
          { id: 1, content: "test1", completed: false },
          { id: 2, content: "test2", completed: true },
        ],
        filter: "completed",
      },
    };
    const mockStore = setupStore(preloadedState);

    const domTree = renderer
      .create(
        <Provider store={mockStore}>
        <ToDoList />
      </Provider>
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    localStorage.setItem("toDoElements", JSON.stringify([]));
  });
});
