import React, { useState } from 'react';
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

import { createAccount } from './accountsSlice';
import { matchExpression } from '../../helpers/matchExpression';
import { IAccount } from '../../types/types';
import { generateAccountNumber, generateAccountName } from '../../helpers/generateAccountDate';

import { initialCurrenciesId } from '../../helpers/initialState';

type TProps = {
  openList: any,
}

const AddAccount = function ({ openList }: TProps) {
  const dispatch = useDispatch();
  const [isAddForm, setIsAddForm] = useState<boolean>(true);
  const [accountBalance, setAccountBalance] = useState<number>(0);
  const [helperText, setHelperText] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [numberAccount, setNumberAccount] = useState<number>(generateAccountNumber());
  const [accountName, setAccountName] = useState<string>(generateAccountName());
  const [curr, setCurrency] = useState<string>('USD');

  const handleNewRandom = () => {
    setAccountName(generateAccountName());
    setNumberAccount(generateAccountNumber());
  };

  const handleAddAcc = () => {
    if (!isError && accountBalance !== 0 && +accountBalance !== 0) {
      const newAccount: IAccount = {
        id: accountName, accountNumber: numberAccount, accountValue: +accountBalance, currency: curr,
      };
      dispatch(createAccount(newAccount));
      setAccountBalance(0);
      handleNewRandom();

      setIsAddForm(false);
      openList(false);
    }
  };

  const handleSetAccountBalance = (e: any) => {
    const target = e.target as HTMLTextAreaElement;
    if (matchExpression(target.value) === false) {
      setHelperText('Invalid format. Only number.');
      setIsError(true);
    } else {
      setHelperText('');
      setIsError(false);
      setAccountBalance(+e.target.value);
    }
  };

  const handleClose = () => {
    setIsAddForm(false);
    openList(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  return (
    <div>
      <Dialog open={isAddForm}>
        <DialogTitle>Create a new demo account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create new account or choose exist account from list
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
            value={numberAccount}
            InputProps={{
              readOnly: true,
            }}
          />
          <div style={{ display: 'flex' }}>
            <TextField
              required
              helperText={helperText}
              error={isError}
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
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={curr}
                  label="Currency"
                  onChange={handleChange}
                >
                  {initialCurrenciesId.map((currency) => (
                    <MenuItem
                      key={currency}
                      value={currency}
                    >
                      {currency}
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
