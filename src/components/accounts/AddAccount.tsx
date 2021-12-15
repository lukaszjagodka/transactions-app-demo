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
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { createAccountActionCreator } from './accountsSlice';
import { matchExpression } from '../../helpers/otherFunctions';
import { IAccount } from '../../types.d';
import { generateAccountNumber, generateAccountName } from '../../helpers/generateAccountDate';

import { initialCurrencesId } from '../../helpers/initialState';

type TProps = {
  openList: any,
}

const AddAccount = function (props: TProps) {
  const dispatch = useDispatch();
  const [addForm, setAddForm] = React.useState<boolean>(true);
  const [accBalance, setAccountBalance] = React.useState<number>(0);
  const [helperText, setHelperText] = React.useState<string>('');
  const [error, setError] = React.useState<boolean>(false);
  const initialStateByAccountNumber = generateAccountNumber;
  const [numberAcc, setNumberAcc] = React.useState<number>(initialStateByAccountNumber);
  const initialStateByAccountName = generateAccountName;
  const [accountName, setAccountName] = React.useState<string>(initialStateByAccountName);
  const [curr, setCurrence] = React.useState<string>('USD');

  const handleNewRandom = () => {
    setAccountName(generateAccountName);
    setNumberAcc(generateAccountNumber);
  };

  const handleAddAcc = () => {
    if (!error && accBalance !== 0 && Number(accBalance) !== 0) {
      const newAccount: IAccount = {
        id: accountName, accNumber: numberAcc, accValue: Number(accBalance), curr,
      };
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

  // select box
  const handleChange = (event: SelectChangeEvent) => {
    setCurrence(event.target.value as string);
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
          <div style={{ display: 'flex' }}>
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
            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Currence</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={curr}
                  label="Currence"
                  onChange={handleChange}
                >
                  {initialCurrencesId.map((currence) => (
                    <MenuItem
                      key={currence}
                      value={currence}
                    >
                      {currence}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>

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
