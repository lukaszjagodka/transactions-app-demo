/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListOfAccounts from '../accounts/ListOfAccounts';
import Navbar from '../Navbar';

import { IState, IAccount } from '../../types.d';

type TProps = {
  selected: IAccount,
  accounts: Array<IAccount>,
}

type TState = {
 sele: Object
}

class Dashboard extends Component <TProps, TState> {
  constructor(props: any) {
    super(props);
    this.state = {
      sele: {},
    };
  }

  componentDidUpdate() {
    const { selected, accounts } = this.props;
    console.log(selected, accounts);
  }

  render() {
    const { selected, accounts } = this.props;
    return (
      <div>
        <Navbar />
        {accounts.map((account) => <h4 key={account.id}>{account.id}</h4>)}
        {selected === undefined ? <h2>UNDEFINED</h2> : 'selected'}
        <button type="button" onClick={() => this.forceUpdate()}>click</button>
        <ListOfAccounts />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  selected: state.selectedAccount,
  accounts: state.accounts,
});

export default connect(mapStateToProps)(Dashboard);
