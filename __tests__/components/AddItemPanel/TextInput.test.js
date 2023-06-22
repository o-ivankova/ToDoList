import TextInput from "../../../src/components/AddItemPanel/components/TextInput";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { expect, jest, test, describe, afterAll } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-test-renderer";
import renderer from "react-test-renderer";

describe("AddItemPanel tests", () => {
  const setup = (input) => {
    const onInputChange = jest.fn();
    render(<TextInput onInputChange={onInputChange} input={input} />);
  };

  test("component is rendered", () => {
    setup("");

    expect(screen.getByRole("textbox")).not.toBeNull;
  });

  test("on input the function is called", () => {
    const onInputChange = jest.fn();
    render(<TextInput onInputChange={onInputChange} input="" />);

    act(() => {
      userEvent.type(screen.getByRole("textbox"), "Buy milk");
    });

    expect(onInputChange).toBeCalled;
  });

  test("input value is displayed", () => {
    const userInput = "Buy milk";
    setup(userInput);

    expect(screen.getByRole("textbox").value).toBe(userInput);
  });

  test("snapshot test", () => {
    const onInputChange = jest.fn();
    const domTree = renderer
      .create(
        <TextInput onInputChange={onInputChange} input="" />
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
