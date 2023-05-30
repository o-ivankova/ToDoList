export const saveElements = (elements) => {
  localStorage.setItem("toDoElements", JSON.stringify(elements));
};

export const saveFilter = (filter) => {
  localStorage.setItem("filter", JSON.stringify(filter));
};

export const getElements = () => {
    return JSON.parse(localStorage.getItem("toDoElements")) ?? [];
};

export const getFilter = () => {
    return JSON.parse(localStorage.getItem("filter")) ?? "all";
};
