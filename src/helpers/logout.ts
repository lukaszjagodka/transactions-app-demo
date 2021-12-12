/* eslint-disable import/prefer-default-export */
export const logOut = () => {
  localStorage.removeItem('selectedAccount');
  localStorage.removeItem('currencesFromApi');
  const { port } = window.location;
  window.location.href = `http://localhost:${port}/`;
};
