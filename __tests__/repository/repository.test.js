import { repository } from "../../src/repository/repository";
import "jest-localstorage-mock";
import { jest, test, describe, expect, afterAll } from "@jest/globals";

describe("saveElements", () => {
  test("correct elements are set to localStorage", () => {
    const itemName = "toDoElements";
    const elements = [
      { id: 1, content: "bla-bla", completed: true },
      { id: 2, content: "la-la", completed: false },
    ];
    const jsonElements = JSON.stringify(elements);

    repository.saveElements(elements);

    expect(localStorage.getItem(itemName)).toEqual(jsonElements);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});

describe("saveFilter", () => {
  test("the correct filter is set to localStorage", () => {
    const filter = "all";
    const itemName = "filter";
    const jsonFilter = JSON.stringify(filter);

    repository.saveFilter(filter);

    expect(localStorage.getItem(itemName)).toEqual(jsonFilter);
  });
});

afterAll(() => {
  jest.clearAllMocks();
});

describe("getElements", () => {
  test("getElements returns correct elements", () => {
    const itemName = "toDoElements";
    const elements = [
      { id: 1, content: "bla-bla", completed: true },
      { id: 2, content: "la-la", completed: false },
    ];
    localStorage.setItem(itemName, JSON.stringify(elements));

    expect(repository.getElements()).toEqual(elements);
  });

  test("getElements returns empty array if the elements item is not set", () => {
    const expectedElements = [];
    const itemName = "toDoElements";
    localStorage.setItem(itemName, null);

    expect(repository.getElements()).toEqual(expectedElements);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});

describe("getFilter", () => {
  test("getFilter returns the correct filter", () => {
    const itemName = "filter";
    const expectedFilter = "active";
    localStorage.setItem(itemName, JSON.stringify(expectedFilter));

    expect(repository.getFilter()).toEqual(expectedFilter);
  });

  test("getFilter returns all if filter item is not set", () => {
    const itemName = "filter";
    const expectedFilter = "all";
    localStorage.setItem(itemName, null);

    expect(repository.getFilter()).toEqual(expectedFilter);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
