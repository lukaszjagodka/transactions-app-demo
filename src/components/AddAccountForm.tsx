/* eslint-disable no-useless-concat */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/* eslint-disable max-len */
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

import { initialStateOfArray } from '../helpers/initialState';
import { generateAccountNumber, generateAccountName } from '../helpers/generateAccountDate';

interface IAccount {
  id: string,
  accNumber: number,
  accValue: number
}

const AddAccountForm = function () {
  const [open, setOpen] = React.useState(true);
  const [list, setList] = React.useState(false);
  const [listOfAccounts, setListOfAccounts] = React.useState<Array<IAccount>>(initialStateOfArray);
  const initialStateByAccountNumber = generateAccountNumber;
  const [numberAcc, setNumberAcc] = React.useState<number>(initialStateByAccountNumber);
  const initialStateByAccountName = generateAccountName;
  const [accountName, setAccountName] = React.useState<string>(initialStateByAccountName);
  const [accBalance, setAccountBalance] = React.useState<number>(0);

  const [helperText, setHelperText] = React.useState<string>('');
  const [error, setError] = React.useState<boolean>(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleNewRandom = () => {
    setAccountName(generateAccountName);
    setNumberAcc(generateAccountNumber);
  };

  const handleCreateNewAcc = () => {
    setList(false);
    setOpen(true);
  };
  const handleAddAcc = () => {
    if (!error) {
      setOpen(false);
      const newAccount: IAccount = { id: accountName, accNumber: numberAcc, accValue: Number(accBalance) };
      console.log(accBalance);
      setListOfAccounts([...listOfAccounts, newAccount]);
      handleNewRandom();
      setList(true);
    }
  };

  const handleSetAccountBalance = (e: any) => {
    const target = e.target as HTMLTextAreaElement;
    if (matchExpression(target.value) === false) {
      setHelperText('Invalid format. Only number.');
      setError(true);
    } else {
      setHelperText('');
      setError(false);
      setAccountBalance(e.target.value);
    }
  };
  const handleShowAccount = (acc: any) => {
    // send choosen account to redux
    console.log(acc);
  };

  function matchExpression(str: any) {
    const rgularExp = {
      onlyNumbers: /^[0-9]+$/,
    };
    return rgularExp.onlyNumbers.test(str);
  }
  const handleClose = () => {
    setList(true);
  };
  return (
    <div>
      {list
        ? (
          <Dialog
            fullScreen={fullScreen}
            open={list}
            fullWidth
            // onClose={handleClose}
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
                  listOfAccounts.slice(0).reverse().map((acc) => (
                    <ListItem component="span" key={acc.id} button>
                      <ListItemText primary={acc.id} secondary={acc.accNumber} onClick={() => handleShowAccount(acc)} />
                      <div style={{ right: '15px' }}>{acc.accValue}</div>
                    </ListItem>
                  ))
                }
              </List>
            </DialogContent>
          </Dialog>
        )
        : (
          <Dialog open={open}>
            <DialogTitle>Creacte a new demo accout</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Create new account or choose from list
              </DialogContentText>
              <TextField
                disabled
                autoFocus
                margin="dense"
                id="accountName"
                label="Accout name"
                fullWidth
                variant="standard"
                value={accountName}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                disabled
                autoFocus
                margin="dense"
                id="accountNumber"
                label="Accout number"
                fullWidth
                variant="standard"
                value={numberAcc}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                required
                helperText={helperText}
                error={error}
                autoFocus
                margin="dense"
                id="accountBalance"
                label="Account balance"
                fullWidth
                variant="standard"
                onChange={handleSetAccountBalance}
              />
            </DialogContent>
            <DialogActions style={{ padding: '25px' }}>
              <Button variant="outlined" onClick={handleClose}>Cancel</Button>
              <Button variant="outlined" onClick={handleNewRandom}>New</Button>
              <Button variant="outlined" color="success" onClick={handleAddAcc}>Add account</Button>
            </DialogActions>
          </Dialog>
        )}
    </div>
  );
};

export default AddAccountForm;
