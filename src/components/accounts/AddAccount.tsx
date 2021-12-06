/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable max-len */
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { useDispatch } from 'react-redux';
import { createAccountActionCreator } from './accountsSlice';
import { matchExpression } from '../../helpers/validationAccount';
import { IAccount } from '../../types.d';
import { generateAccountNumber, generateAccountName } from '../../helpers/generateAccountDate';

type TProps = {
  openList: any,
}

const AddAccount = function (props: TProps) {
  const dispatch = useDispatch();
  const [addForm, setAddForm] = React.useState<boolean>(true);
  const [accBalance, setAccountBalance] = React.useState<number>(0);
  const initialStateByAccountNumber = generateAccountNumber;
  const [numberAcc, setNumberAcc] = React.useState<number>(initialStateByAccountNumber);
  const initialStateByAccountName = generateAccountName;
  const [accountName, setAccountName] = React.useState<string>(initialStateByAccountName);

  const [helperText, setHelperText] = React.useState<string>('');
  const [error, setError] = React.useState<boolean>(false);

  const handleNewRandom = () => {
    setAccountName(generateAccountName);
    setNumberAcc(generateAccountNumber);
  };

  const handleAddAcc = () => {
    if (!error && accBalance !== 0 && Number(accBalance) !== 0) {
      const newAccount: IAccount = { id: accountName, accNumber: numberAcc, accValue: Number(accBalance) };
      dispatch(createAccountActionCreator(newAccount));
      setAccountBalance(0);
      handleNewRandom();

      setAddForm(false);
      props.openList(false);
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

  const handleClose = () => {
    setAddForm(false);
    props.openList(false);
  };

  return (
    <div>
      <Dialog open={addForm}>
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
    </div>
  );
};

export default AddAccount;
