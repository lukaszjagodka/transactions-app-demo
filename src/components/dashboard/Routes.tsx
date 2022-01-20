import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import ListOfAccounts from '../accounts/ListOfAccounts';
import Navbar from '../Navbar';
import { IAccountsState, IAccount } from '../../types/types';
import { AccountVerification } from '../../helpers/accountVerification';
import Background from '../../images/wallpaper_mountains.jpg';

type TProps = {
  accounts: {
    selectedAccount: IAccount,
    accounts: Array<IAccount>,
  }
}

const sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: '100%',
  height: '100%',
};

class Dashboard extends PureComponent<TProps> {
  render() {
    return (
      <div style={{ ...sectionStyle }}>
        <Navbar />
        <Routes>
          <Route path="/a/:accountId" element={<AccountVerification />} />
          <Route path="/" element={<ListOfAccounts />} />
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
