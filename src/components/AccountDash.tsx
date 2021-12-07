/* eslint-disable func-names */
import React from 'react';
import { useParams } from 'react-router-dom';

const AccountDash = function () {
  const params = useParams();
  return (
    <div>
      <h1>{params.accountId}</h1>
    </div>
  );
};

export default AccountDash;
