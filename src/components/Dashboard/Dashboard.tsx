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
import { connect, useSelector } from 'react-redux';
import {
  Routes, Route, useParams, Navigate,
} from 'react-router-dom';
import ListOfAccounts from '../accounts/ListOfAccounts';
import Navbar from '../Navbar';
import { IState, IAccount } from '../../types.d';
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
    const params = useParams();
    const { accountId } = params;
    const accountsss = useSelector((state: IState) => state.accounts.accounts);
    const selA = useSelector((state: IState) => state.accounts.selectedAccount);
    if (accountId === selA.id) {
      return <AccountDash acc={accountId} />;
    }
    return <Navigate replace to="/" />;
  };

  render() {
    const { accounts, selectedAccount } = this.props.accounts;
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/a/:accountId" element={<this.AccDashVerif />} />
          <Route path="/" element={<div />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <ListOfAccounts />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  accounts: state.accounts,
});

export default connect(mapStateToProps)(Dashboard);
