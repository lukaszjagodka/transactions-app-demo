/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-concat */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/* eslint-disable max-len */
import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import { useSelector } from 'react-redux';
import AddAccount from './AddAccount';

import { IAccount, IState } from '../../types.d';
import ShowList from './ShowList';

const ListOfAccounts = function () {
  const accounts = useSelector((state: IState) => state.accounts.accounts);
  const [list, setList] = React.useState<boolean>(true);
  const [addForm, setAddForm] = React.useState<boolean>(false);
  const [listOfAccounts, setListOfAccounts] = React.useState<IAccount[]>(accounts);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleCreateNewAcc = () => {
    setList(false);
    setAddForm(!addForm);
      <AddAccount openList={handleOpenList} />;
  };

  const handleOpenList = (e: any) => {
    setList(!e);
    setAddForm(e);
  };

  const handleCloseList = (e: any) => {
    setList(true); // do testów
    // setList(e); docelowo => false
  };

  return (
    <div>
      {list
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
                  accounts.length < 3 ? (
                    listOfAccounts.slice(0).reverse().map((acc: any) => (
                      <ShowList key={acc.id} acc={acc} closeList={handleCloseList} />
                    ))
                  ) : (
                    accounts.slice(0).reverse().map((acc: any) => (
                      <ShowList key={acc.id} acc={acc} closeList={handleCloseList} />
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
  );
};

export default ListOfAccounts;
