export const repository = {
  saveElements: (elements) => {
    localStorage.setItem("toDoElements", JSON.stringify(elements));
  },

  saveFilter: (filter) => {
    localStorage.setItem("filter", JSON.stringify(filter));
  },

  getElements: () => {
    return JSON.parse(localStorage.getItem("toDoElements")) ?? [];
  },

  getFilter: () => {
    return JSON.parse(localStorage.getItem("filter")) ?? "all";
  },
};
