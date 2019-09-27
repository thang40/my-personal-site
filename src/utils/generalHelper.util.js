export const upperCase1stChar = str => {
  const length = str.length;
  if (length === 0) {
    return str;
  }
  return str[0].toUpperCase() + (length > 1 ? str.slice(1) : "");
};
