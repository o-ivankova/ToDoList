import React from "react";
import Checkbox from "../../../src/components/ToDoListItem/components/checkbox/Checkbox";
import { jest, expect, test, describe } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

const onCheckCompletedMock = jest.fn();


describe("Checkbox tests", () => {
Date.now = jest.fn(() => 1482363367071);
    test("component is rendered", () => {
      render(
          <Checkbox completed = {false} onCheckCompleted = {onCheckCompletedMock}/>
      );
  
      expect(screen.getByTestId("checkbox")).not.toBeNull;
    });
  
    test("checked value -true- displayed correctly", () => {
      render(
          <Checkbox completed = {true} onCheckCompleted = {onCheckCompletedMock}/>
      );
  
      expect(screen.getByTestId("checkbox").checked).toBe(true);
    });

    test("checked value -false- displayed correctly", () => {
        render(
            <Checkbox completed = {false} onCheckCompleted = {onCheckCompletedMock}/>
        );
    
        expect(screen.getByTestId("checkbox").checked).toBe(false);
      });

      test("onCheckCompleted function is called", () => {
        

        render(
            <Checkbox completed = {false} onCheckCompleted = {onCheckCompletedMock}/>
        );
        fireEvent.click(screen.getByTestId("checkbox"));
    
        expect(onCheckCompletedMock).toBeCalled;
      });

      test("snapshot test", () => {
        const domTree = renderer
          .create(
            <Checkbox completed = {false} onCheckCompleted = {onCheckCompletedMock}/>
          )
          .toJSON();
        expect(domTree).toMatchSnapshot();
      });
  });