/* eslint-disable no-console */
export async function fetchRates() {
  try {
    const response = await fetch('http://localhost:3001/rates');
    const json = await response.json();
    const { currencyString } = json.data;
    localStorage.setItem('actual3x', currencyString);
  } catch (err) {
    console.error('Error: ', err);
  }
}
