import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import {
  expect,
  test,
  describe,
  jest,
  afterAll,
  afterEach,
} from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import ItemStatusFilter from "../../../src/components/ItemStatusFilter";
import {setupStore} from "../../../src/redux/store";
import renderer from "react-test-renderer";

describe("FilterButtons tests", () => {
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
        <ItemStatusFilter />
      </Provider>
    );

    expect(screen.getByTestId("filter-buttons")).toBeInTheDocument();
    expect(screen.getByTestId("counter")).toBeInTheDocument();
    expect(screen.getByTestId("clear-button")).toBeInTheDocument();
  });

  test("clear completed elements", () => {
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
        <ItemStatusFilter />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("clear-button"));

    const expectedLocalStorage = preloadedState.toDoList.elements.filter(
      (el) => !el.completed
    );
    const elementsInLocalStorage = JSON.parse(
      localStorage.getItem("toDoElements")
    );
    
    expect(elementsInLocalStorage).toEqual(expectedLocalStorage);
  });

  test("clear completed elements - no completed elements", () => {
    const preloadedState = {
      toDoList: {
        elements: [
          { id: 1, content: "test1", completed: false },
          { id: 2, content: "test2", completed: false },
          { id: 3, content: "test3", completed: false },
          { id: 4, content: "test4", completed: false },
        ],
      },
    };
    const mockStore = setupStore(preloadedState);
   
    render(
      <Provider store={mockStore}>
        <ItemStatusFilter />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("clear-button"));

    const expectedLocalStorage = preloadedState.toDoList.elements;

    const elementsInLocalStorage = JSON.parse(
      localStorage.getItem("toDoElements")
    );
    
    expect(elementsInLocalStorage).toEqual(expectedLocalStorage);
  });

  afterAll(() => {
    jest.clearAllMocks();
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
          <ItemStatusFilter />
        </Provider>
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  });

  afterEach(() => {
    localStorage.setItem("toDoElements", JSON.stringify([]));
  });
});
