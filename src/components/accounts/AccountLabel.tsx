import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAccount } from './accountsSlice';
import { IAccount } from '../../types/types';

type TProps = {
  account: any,
  closeList: any,
};

const AccountLabel = function ({ account, closeList }: TProps) {
  const dispatch = useDispatch();

  const closeListFrmChild = () => {
    closeList(false);
  };

  const handleShowAccount = (selectedAccount: IAccount) => {
    localStorage.setItem('selectedAccount', JSON.stringify(account.id));
    dispatch(selectAccount({
      ...selectedAccount,
      createdAt: '',
    }));
    closeListFrmChild();
  };

  return (
    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/a/${account.id}`}>
      <ListItem component="span" key={account.id} button>
        <ListItemText primary={account.name} secondary={account.accountNumber} onClick={() => handleShowAccount(account)} />
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
