/* eslint-disable no-console */
export async function put(data: any, target: string) {
  try {
    await fetch(`http://localhost:3001/${target}`, {
      method: 'PUT',
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
