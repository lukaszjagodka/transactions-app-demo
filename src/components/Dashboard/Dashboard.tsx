/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import ListOfAccounts from '../accounts/ListOfAccounts';
import Navbar from '../Navbar';
import { IAccountsState, IAccount } from '../../types.d';
import AccountDash from '../AccountDash';

type TProps = {
  accounts: {
    selectedAccount: IAccount,
    accounts: Array<IAccount>,
  }
}

type TState = {}

class Dashboard extends Component <TProps, TState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  AccDashVerif = () => {
    const retrievedObject: string | null = localStorage.getItem('selectedAccount');
    if (retrievedObject !== null) {
      return <AccountDash />;
    }
      <Navigate replace to="/" />;
      return (
        <div />
      );
  };

  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/a/:accountId" element={<this.AccDashVerif />} />
          <Route path="/" element={<this.AccDashVerif />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <ListOfAccounts />
      </div>
    );
  }
}

const mapStateToProps = (state: IAccountsState) => ({
  accounts: state.accounts,
});

export default connect(mapStateToProps)(Dashboard);
