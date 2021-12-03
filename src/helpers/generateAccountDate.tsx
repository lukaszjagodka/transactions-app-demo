/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
const { v4: uuidv4 } = require('uuid');

export const generateAccountNumber = () => {
  return Math.floor(10 ** (15 - 1) + Math.random() * (10 ** 15 - 10 ** (15 - 1) - 1));
};

export const generateAccountName = () => {
  const prefix = 'Demo-account-';
  const randomSurfix = uuidv4();
  // const RandomAccountName = prefix + randomSurfix;
  const RandomAccountName = `${prefix}${Math.random().toString(36).substr(2, 9)}`;
  return RandomAccountName;
};
