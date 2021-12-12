/* eslint-disable func-names */
/* eslint-disable max-len */
import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAccountActionCreator } from './accountsSlice';

type TProps = {
  acc: any,
  closeList: any,
};

const ShowList = function (props: TProps) {
  const dispatch = useDispatch();

  const closeListFrmChild = () => {
    const { closeList } = props;
    closeList(false);
  };

  const handleShowAccount = (acc: any) => {
    localStorage.setItem('selectedAccount', JSON.stringify(acc.id));
    dispatch(selectAccountActionCreator({
      id: acc.id, accNumber: acc.accNumber, accValue: acc.accValue, curr: acc.curr,
    }));
    closeListFrmChild();
  };

  const { acc } = props;
  return (
    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/a/${acc.id}`}>
      <ListItem component="span" key={acc.id} button>
        <ListItemText primary={acc.id} secondary={acc.accNumber} onClick={() => handleShowAccount(acc)} />
        <div style={{ right: '15px' }}>
          {acc.accValue}
          {' '}
          {acc.curr}
        </div>
      </ListItem>
    </NavLink>
  );
};

export default ShowList;
