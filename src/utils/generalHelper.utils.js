const vietnameseTranslate = {
  Hello: "Chào"
};

export const translate = (language, message) => {
  return vietnameseTranslate[message];
};

export const fuzzySearch = searchStr => {};
