/* eslint-disable react/react-in-jsx-scope */
import { Navigate } from 'react-router-dom';

export const logOut = () => {
  localStorage.removeItem('selectedAccount');
  localStorage.removeItem('currenciesFromApi');
  window.location.href = '/';
  return <Navigate to="/" replace />;
};
