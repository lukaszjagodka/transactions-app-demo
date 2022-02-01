/* eslint-disable no-console */
export async function post(data: any, target: string) {
  try {
    await fetch(`http://localhost:3001/${target}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error('Error: ', err);
  }
}
