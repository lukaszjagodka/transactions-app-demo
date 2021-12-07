/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, useParams } from 'react-router-dom';
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

  render() {
    const { accounts, selectedAccount } = this.props.accounts;
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/a/:accountId" element={<AccountDash />} />
          {/* {!(selectedAccount.id.length < 2) ? <h2>{`${selectedAccount.id} ${selectedAccount.accNumber} ${selectedAccount.accValue}`}</h2> : ''} */}
          {/* {accounts.map((account) => <h4 key={account.id}>{account.id}</h4>)} */}
          <Route
            path="*"
            element={(
              <main style={{ padding: '1rem' }}>
                <p>Theres nothing here!</p>
              </main>
            )}
          />
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
