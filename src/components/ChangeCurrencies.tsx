/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { initialCurrenciesId } from '../helpers/initialState';
import { matchExpression } from '../helpers/matchExpression';
import { createTransaction } from './transactions/transactionsSlice';
import { updateAccountValue } from './accounts/accountsSlice';
import { IAccountsState, TPair } from '../types/types';

const ChangeCurrencies = function () {
  const dispatch = useDispatch();
  const selectedAcc = useSelector((state: IAccountsState) => state.accounts.selectedAccount);
  const baseOfRates = useSelector((state: IAccountsState) => state.accounts.currencyString);
  const selectedAccount: string | null = localStorage.getItem('selectedAccount');
  const actual3xItem: string | null = localStorage.getItem('actual3x');
  const [rate, setRate] = useState<string>('');

  // FIRST PAIR
  const [amountFirstPair, setAmountFirstPair] = useState<number | string>('');
  const [currFirstPair, setCurrencyFirstPair] = useState<string>('USD');
  const [helperText, setHelperText] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  // SECOND PAIR
  const [amountSecondPair, setAmountSecondPair] = useState<number | string>('');
  const [currSecondPair, setCurrencySecondPair] = useState<string>('USD');

  const findPairInArray = function (base: any) {
    const actualPair = JSON.parse(base).filter((currency: any) => currency.pair === `${currFirstPair}/${currSecondPair}`);
    return actualPair;
  };

  const convertCurrency = function (amountFromFirstPair: number | string, actualPair: Array<TPair>) {
    const amountFPNumber = Number(amountFromFirstPair);
    const unrounded = amountFPNumber * parseFloat(actualPair[0].value);
    const amountSP = Math.round((unrounded + Number.EPSILON) * 100) / 100;
    return amountSP;
  };

  useEffect(() => {
    if (amountFirstPair !== '' && currFirstPair !== currSecondPair && actual3xItem) {
      const actualPair = findPairInArray(baseOfRates);
      if (actualPair.length) {
        setRate(actualPair[0].value);
        const amountSP = convertCurrency(amountFirstPair, actualPair);
        setAmountSecondPair(amountSP);
      }
    }
  });

  const handleChange = async () => {
    if (selectedAccount) {
      const { accountValue, accountNumber } = JSON.parse(selectedAccount);
      if (amountFirstPair < accountValue) {
        if (amountFirstPair && currFirstPair !== currSecondPair && actual3xItem) {
          const actualPair = findPairInArray(baseOfRates);
          if (!actualPair.length) {
            alert('We havent this rate in our data. Please change currencies.');
          } else {
            const actualBalance = accountValue - Number(amountFirstPair);
            const updatedSelectedAccount = {
              id: selectedAcc.id, name: selectedAcc.name, accountNumber, accountValue: actualBalance, currency: currFirstPair,
            };
            localStorage.setItem('selectedAccount', JSON.stringify(updatedSelectedAccount));
            const amountSP = convertCurrency(amountFirstPair, actualPair);
            dispatch(createTransaction({
              name: selectedAcc.name, amountFirstPair: Number(amountFirstPair), currencyFirstPair: currFirstPair, amountSecondPair: amountSP, currencySecondPair: currSecondPair,
            }));
            const newAccountValue = Number(amountFirstPair);
            dispatch(updateAccountValue(newAccountValue));
            setAmountFirstPair('');
            setAmountSecondPair('');
            setRate('');
          }
        }
      }
    }
  };

  const setAmountFP = (e: any) => {
    const target = e.target as HTMLTextAreaElement;
    if (matchExpression(target.value) === false) {
      setHelperText('Only number.');
      setIsError(true);
      setTimeout(() => {
        setHelperText('');
        setIsError(false);
      }, 2500);
    } else {
      setHelperText('');
      setIsError(false);
      setAmountFirstPair(e.target.value);
    }
  };

  // select first pair
  const handleSelectFirstPair = (event: SelectChangeEvent) => {
    setCurrencyFirstPair(event.target.value as string);
  };

  // select second pair
  const handleSelectSecondPair = (event: SelectChangeEvent) => {
    setCurrencySecondPair(event.target.value as string);
    setAmountSecondPair('');
  };

  const handleCancel = () => {
    setAmountFirstPair('');
    setAmountSecondPair('');
    setHelperText('');
    setRate('');
    setIsError(false);
  };

  return (
    <div style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 3 }}>
      <div style={{ display: 'flex' }}>
        {/* FIRST PAIR */}
        <TextField
          style={{ marginRight: '15px' }}
          required
          helperText={helperText}
          error={isError}
          value={amountFirstPair}
          onChange={setAmountFP}
          autoFocus
          margin="dense"
          id="accountBalance"
          label="Enter the amount"
          fullWidth
          variant="standard"
        />
        <Box sx={{ minWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
            <Select
              disabled
              style={{ fontWeight: 'bold' }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currFirstPair}
              label="Currency"
              onChange={handleSelectFirstPair}
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
      <div style={{ display: 'flex' }}>
        {/* SECOND PAIR */}
        <TextField
          style={{
            fontWeight: 'bold', fontSize: '20px', marginRight: '15px',
          }}
          required
          disabled
          autoFocus
          margin="dense"
          id="accountBalance"
          value={amountSecondPair}
          fullWidth
          variant="filled"
        />
        <Box sx={{ minWidth: 150, marginTop: '8px' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
            <Select
              style={{ fontWeight: 'bold' }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currSecondPair}
              label="Currency"
              onChange={handleSelectSecondPair}
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
      <DialogActions>
        <Button fullWidth variant="outlined" onClick={handleCancel}>Cancel</Button>
        <TextField style={{ margin: '5px', left: '4px' }} id="outlined-basic" variant="outlined" value={rate} disabled />
        <Button fullWidth variant="outlined" color="success" onClick={handleChange}>Change</Button>
      </DialogActions>
    </div>
  );
};

export default ChangeCurrencies;
