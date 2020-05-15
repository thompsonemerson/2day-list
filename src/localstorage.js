const KEY_STORAGE = '2day-list';

export const get = () => {
  try {
    const data = localStorage.getItem(KEY_STORAGE);
    if (data === null) return undefined;

    return JSON.parse(data);
  } catch (err) {
    return undefined;
  }
};

export const save = (state) => {
  try {
    const data = JSON.stringify(state);
    localStorage.setItem(KEY_STORAGE, data);

    const newData = localStorage.getItem(KEY_STORAGE);

    return JSON.parse(newData);
  } catch (err) {
    console.error(err);
  }
};
