import { jest } from "@jest/globals";

const localStorageMock = (function () {
  let store = {};

  return {
    getItem: jest.fn((key) => {
      return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
    }),

    setItem: jest.fn((key, value) => {
      store[key] = value;
    }),
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });
