/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable func-names */
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class AccountDash extends Component {
  render() {
    const retrievedObject: string | null = localStorage.getItem('selectedAccount');
    return (
      <>
        { retrievedObject !== null ? (
          <div>
            <h1>Hello from the selected account</h1>
          </div>
        ) : (
          <>
            <Navigate replace to="/" />
          </ >
        )}
      </>
    );
  }
}

export default AccountDash;
