export const internalMemory = {
  save: (key, value) => {
    if (typeof key !== "string") throw new Error("Key must be a valid string");
    if (value === undefined) throw new Error("Value cannot be undefined");
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key) => {
    if (typeof key !== "string") throw new Error("Key must be a valid string");
    return JSON.parse(localStorage.getItem(key));
  },
  remove: (key) => {
    if (typeof key !== "string") throw new Error("Key must be a valid string");
    localStorage.removeItem(key);
  },
};
