/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
export const generateAccountNumber = () => {
  return Math.floor(10 ** (15 - 1) + Math.random() * (10 ** 15 - 10 ** (15 - 1) - 1));
};

export const generateAccountName = () => {
  const prefix = 'Demo-account-';
  const RandomAccountName = `${prefix}${Math.random().toString(36).substr(2, 9)}`;
  return RandomAccountName;
};
