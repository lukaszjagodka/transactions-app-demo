/* eslint-disable consistent-return */
/* eslint-disable no-console */
export const get = async (target: string) => {
  try {
    const response = await fetch(`http://localhost:3001/${target}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'same-origin',
    });
    const json = await response.json();
    return json;
  } catch (err) {
    console.error('Error: ', err);
  }
};
