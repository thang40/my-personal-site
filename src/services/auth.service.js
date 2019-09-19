export const isLoggedIn = () => {
  const userData = localStorage.getItem("auth");
  return userData === null ? false : true;
};

export const clearAuthData = () => {
  localStorage.removeItem("auth");
};

export const getAuthData = () => {
  localStorage.getItem("auth");
};
