/* eslint-disable no-undef */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import ListOfAccounts from '../components/accounts/ListOfAccounts';

export const PrivateRoute = function ({ children }: { children: JSX.Element }) {
  const auth: string | null = localStorage.getItem('selectedAccount');
  const location = useLocation();
  if (auth) {
    const { id } = JSON.parse(auth);
    const accountName = `/a/${id}`;
    if (location.pathname !== accountName) {
      return <Navigate to={accountName} state={{ from: location }} />;
    }
  }
  if (!auth) {
    return <ListOfAccounts />;
  }
  return children;
};
