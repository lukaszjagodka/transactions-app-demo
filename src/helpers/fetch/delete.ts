/* eslint-disable no-console */
/* eslint-disable consistent-return */
export async function deleteAccount(target: string) {
  try {
    const response = await fetch(`http://localhost:3001/${target}`, {
      method: 'DELETE',
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
}
