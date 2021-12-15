/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/prefer-default-export */
const key = process.env.REACT_APP_API_KEY;

const checkForError = (response: any) => {
  if (!response.ok) throw Error(response.statusText);
  return response.json();
};

export async function fetchParams(currFirstPair: string, currSecondPair: string) {
  await fetch(
    `https://free.currconv.com/api/v7/convert?q=${currFirstPair}_${currSecondPair}&compact=ultra&apiKey=${key}`,
  )
    .then(checkForError)
    .then((data) => {
      localStorage.setItem('currencesFromApi', JSON.stringify({ fetchParams: 'true' }));
      console.log('KEY working', data);
      return data;
    })
    .catch((error) => {
      localStorage.setItem('currencesFromApi', JSON.stringify({ fetchParams: 'false' }));
      if (error.message === 'Service Unavailable') {
        alert(`${error} \n\n In this situation we will try download currencies from 'live-rates'.`);
      } else {
        alert(`${error} \n\n You have a problem with api provider or your api key. In this situation we will try download currencies from 'live-rates'. After failed attempt system will use historical data from 'live-rates' in initial state. `);
      }

      setTimeout(() => {
        localStorage.removeItem('currencesFromApi');
      }, 1800000);

      const actual3x: string | null = localStorage.getItem('actual3x');
      if (!actual3x) {
        // Try get actual data from 'live-rates'.
        fetch3x();
      }
      console.log('exit from error');
    });
}

export async function fetch3x() {
  console.log('f3x');
  await fetch(
    'https://www.live-rates.com/rates',
  )
    .then(checkForError)
    .then((data) => {
      // teraz do LS później do reduxa
      const dateTime = new Date();
      console.log(`update f3x ${dateTime}`, data);
      localStorage.setItem('actual3x', JSON.stringify({ dateTime, data }));
    })
    .catch((error) => {
      alert('We will use historical data.');
    });
}
