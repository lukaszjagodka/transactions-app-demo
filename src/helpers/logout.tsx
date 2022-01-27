/* eslint-disable react/react-in-jsx-scope */
import { Navigate } from 'react-router-dom';

export const logOut = () => {
  localStorage.removeItem('selectedAccount');
  window.location.href = '/';
  return <Navigate replace to="/" />;
};
