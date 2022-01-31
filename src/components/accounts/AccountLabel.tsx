import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAccount } from './accountsSlice';

type TProps = {
  account: any,
  closeList: any,
};

const AccountLabel = function (props: TProps) {
  const dispatch = useDispatch();

  const closeListFrmChild = () => {
    const { closeList } = props;
    closeList(false);
  };

  const handleShowAccount = (account: any) => {
    localStorage.setItem('selectedAccount', JSON.stringify(account.id));
    dispatch(selectAccount({
      id: account.id, accountNumber: account.accountNumber, accountValue: account.accountValue, currency: account.currency,
    }));
    closeListFrmChild();
  };

  const { account } = props;
  return (
    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/a/${account.id}`}>
      <ListItem component="span" key={account.id} button>
        <ListItemText primary={account.id} secondary={account.accountNumber} onClick={() => handleShowAccount(account)} />
        <div style={{ right: '15px' }}>
          {account.accountValue}
          {' '}
          {account.currency}
        </div>
      </ListItem>
    </NavLink>
  );
};

export default AccountLabel;
