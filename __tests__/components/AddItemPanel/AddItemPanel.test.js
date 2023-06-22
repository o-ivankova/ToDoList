import React from "react";
import "@testing-library/jest-dom";
import { jest, expect, test, describe, afterAll } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import AddItemPanel from "../../../src/components/AddItemPanel/AddItemPanel";
import { Provider } from "react-redux";
import { act } from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import { setupStore } from "../../../src/redux/store";
import renderer from "react-test-renderer";

const getMockStore = () => {
  const preloadedState = {
    toDoList: {
      filter: "all",
      elements: [],
    },
  };

  return setupStore(preloadedState);
}

describe("AddItemPanel tests", () => {
  test("component is rendered", () => {
    render(
      <Provider store={getMockStore()}>
        <AddItemPanel />
      </Provider>
    );

    screen.debug();
    expect(screen.getByTestId("addItemForm")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  test("user input is visible", () => {
    render(
      <Provider store={getMockStore()}>
        <AddItemPanel />
      </Provider>
    );

    const userInput = "Buy milk";
    act(() => {
      userEvent.type(screen.getByRole("textbox"), userInput);
    });

    expect(screen.getByTestId("input").value).toBe(userInput);
  });

  test("input is saved on submit", () => {
    render(
      <Provider store={getMockStore()}>
        <AddItemPanel />
      </Provider>
    );

    const userInput = "Buy milk{enter}";
    act(() => {
      userEvent.type(screen.getByRole("textbox"), userInput);
    });

    const savedItem = JSON.parse(localStorage.getItem("toDoElements"));
    expect(savedItem.some((e) => e.content === "Buy milk"));
  });

  test("input is not saved on enter with no text", () => {
    render(
      <Provider store={getMockStore()}>
        <AddItemPanel />
      </Provider>
    );
    const initialSavedItem = localStorage.getItem("toDoElements");

    const userInput = "{enter}";
    act(() => {
      userEvent.type(screen.getByRole("textbox"), userInput);
    });

    const savedItemAfterInput = localStorage.getItem("toDoElements");
    expect(savedItemAfterInput).toEqual(initialSavedItem);
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
          <AddItemPanel />
        </Provider>
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  });

  afterAll(() => {
    jest.clearAllMocks();
  }); 
});
