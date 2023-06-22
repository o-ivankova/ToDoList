import React from "react";
import '@testing-library/jest-dom';
import AppHeader from "../../../src/components/AppHeader/AppHeader";
import { expect, test, describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

describe("AppHeader tests", () => {
  test("component is rendered", () => {
    render(
        <AppHeader />
    );

    expect(screen.getByTestId("app-header")).not.toBeNull;
  });

  test("component has text TO DO", () => {
    render(
        <AppHeader />
    );

    expect(screen.getByTestId("app-header")).toHaveTextContent("TO DO");
  });

  test("snapshot test", () => {
    const domTree = renderer
      .create(
          <AppHeader />
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  });
});