import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import { useSelector, useDispatch } from 'react-redux';
import AddAccount from './AddAccount';
import { selectAccount } from './accountsSlice';
import { IAccount, IAccountsState } from '../../types/types';
import AccountLabel from './AccountLabel';

const ListOfAccounts = function () {
  const dispatch = useDispatch();
  const accounts = useSelector((state: IAccountsState) => state.accounts.accounts);
  const selectedAcc = useSelector((state: IAccountsState) => state.accounts.selectedAccount);
  const [isAccountLS, setIsAccountLS] = useState<boolean>(false);
  const [isList, setIsList] = useState<boolean>(true);
  const [addForm, setAddForm] = useState<boolean>(false);
  const [listOfAccounts, setListOfAccounts] = useState<IAccount[]>(accounts);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleCreateNewAcc = () => {
    setIsList(false);
    setAddForm(!addForm);
      <AddAccount openList={handleOpenList} />;
  };

  const handleOpenList = (e: any) => {
    setIsList(!e);
    setAddForm(e);
  };

  const handleCloseList = (e: any) => {
    setIsList(e);
  };

  const retrievedAccountsObject: string | null = localStorage.getItem('accounts');
  if (retrievedAccountsObject) {
    const accountsFromLocalStorage = JSON.parse(retrievedAccountsObject);
    if (accountsFromLocalStorage.length > 2 && !isAccountLS) {
      setIsAccountLS(true);
      setListOfAccounts(accountsFromLocalStorage);
    }
  }

  useEffect(() => {
    setIsAccountLS(false);
  }, [isAccountLS]);

  const retrievedSelectedAccObject: string | null = localStorage.getItem('selectedAccount');
  if (retrievedSelectedAccObject) {
    const {
      id, accountNumber, accountValue, currency,
    } = JSON.parse(retrievedSelectedAccObject);
    if (selectedAcc.id === '') {
      dispatch(selectAccount({
        id, accountNumber, accountValue, currency,
      }));
    }
  }

  return (
    <div>
      { !retrievedSelectedAccObject && (
      <div>
        {isList
          && (
          <Dialog
            fullScreen={fullScreen}
            open
            fullWidth
            aria-labelledby="responsive-dialog-title"
          >
            <DialogActions style={{
              paddingTop: '25px', display: 'block', marginLeft: 'auto', marginRight: 'auto',
            }}
            >
              <Button variant="outlined" onClick={handleCreateNewAcc}>
                Create a new account
              </Button>
            </DialogActions>
            <DialogContent>
              <List component="span">
                {
                listOfAccounts.length > 2 ? (
                  listOfAccounts.slice(0).reverse().map((acc: any) => (
                    <AccountLabel key={acc.id} account={acc} closeList={handleCloseList} />
                  ))
                ) : (
                  accounts.slice(0).reverse().map((acc: any) => (
                    <AccountLabel key={acc.id} account={acc} closeList={handleCloseList} />
                  ))
                )
              }
              </List>
            </DialogContent>
          </Dialog>
          )}
        { addForm
           && <AddAccount openList={handleOpenList} />}
      </div>
      )}
    </div>
  );
};

export default ListOfAccounts;
