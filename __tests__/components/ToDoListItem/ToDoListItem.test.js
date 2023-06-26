import React from "react";
import ToDoListItem from "../../../src/components/ToDoListItem/ToDoListItem";
import "@testing-library/jest-dom";
import { jest, expect, test, describe } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../../../src/redux/store";

describe("ToDoListItem tests", () => {
  const onDeletedMock = jest.fn();
  const onCheckCompletedMock = jest.fn();
  const content = "test";

  test("component is rendered", () => {
    render(
      <ToDoListItem
        content={content}
        completed={false}
        onCheckCompleted={onCheckCompletedMock}
        onDeleted={onDeletedMock}
      />
    );

    expect(screen.getByTestId("to-do-list-item")).not.toBeNull;
    expect(screen.getByTestId("todo-list-item-content")).not.toBeNull;
    expect(screen.getByTestId("checkbox")).not.toBeNull;
    expect(screen.getByTestId("delete-btn")).not.toBeNull;
  });

  test("the correct content is displayed", () => {
    render(
      <ToDoListItem
        content={content}
        completed={false}
        onCheckCompleted={onCheckCompletedMock}
        onDeleted={onDeletedMock}
      />
    );

    expect(screen.getByTestId("todo-list-item-content")).toHaveTextContent(
      content
    );
  });

  test("the correct checkbox value is displayed - unchecked", () => {
    render(
      <ToDoListItem
        content={content}
        completed={false}
        onCheckCompleted={onCheckCompletedMock}
        onDeleted={onDeletedMock}
      />
    );

    expect(screen.getByTestId("checkbox").checked).toBe(false);
  });

  test("the correct checkbox value is displayed - checked", () => {
    render(
      <ToDoListItem
        content={content}
        completed={true}
        onCheckCompleted={onCheckCompletedMock}
        onDeleted={onDeletedMock}
      />
    );

    expect(screen.getByTestId("checkbox").checked).toBe(true);
  });

  test("onDeleted function is called on delete button click", () => {
    render(
      <ToDoListItem
        content={content}
        completed={false}
        onCheckCompleted={onCheckCompletedMock}
        onDeleted={onDeletedMock}
      />
    );

    fireEvent.click(screen.getByTestId("delete-btn"));

    expect(onDeletedMock).toBeCalled;
  });

  test("checkbox click", () => {
    render(
      <ToDoListItem
        content={content}
        completed={false}
        onCheckCompleted={onCheckCompletedMock}
        onDeleted={onDeletedMock}
      />
    );

    fireEvent.click(screen.getByTestId("checkbox"));

    expect(onCheckCompletedMock).toBeCalled;
  });

  test("snapshot test", () => {
    const preloadedState = {
      toDoList: {
        filter: "all",
        elements: [],
      },
    };
    const mockStore = setupStore(preloadedState);
    const domTree = render(
      <Provider store={mockStore}>
        <ToDoListItem
          content={content}
          completed={false}
          onCheckCompleted={onCheckCompletedMock}
          onDeleted={onDeletedMock}
        />
      </Provider>
    );

    expect(domTree).toMatchSnapshot();
  });
});
