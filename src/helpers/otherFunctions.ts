/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { initialCurrencesRates } from './initialState';

export const matchExpression = (str: any) => {
  const rgularExp = {
    onlyNumbers: /^[0-9]+$/,
  };
  return rgularExp.onlyNumbers.test(str);
};

export const getDateTime = () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dateTime = `${date} ${time}`;
  return dateTime;
};

export const logOut = () => {
  localStorage.removeItem('selectedAccount');
  localStorage.removeItem('currencesFromApi');
  const { port } = window.location;
  window.location.href = `http://localhost:${port}/`;
};

export const loadHistoricalDataToLocalState = () => {
  const dateTime = getDateTime();
  const data = initialCurrencesRates;
  localStorage.setItem('actual3x', JSON.stringify({ dateTime, data }));
};
