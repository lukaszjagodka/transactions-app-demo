/* eslint-disable array-callback-return */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable func-names */
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';

import { initialCurrencesId } from '../helpers/initialState';
import { matchExpression, loadHistoricalDataToLocalState } from '../helpers/otherFunctions';
import { fetchParams, fetch3x } from '../helpers/fetchFnc';
import { createTransactionActionCreator } from './transactionsSlice';
import { IAccountsState } from '../types.d';

const ChangeCurrences = function () {
  const dispatch = useDispatch();
  const selectedAcc = useSelector((state: IAccountsState) => state.accounts.selectedAccount);
  // FIRST PAIR
  const [amountFirstPair, setAmountFirstPair] = React.useState<number | string>('');
  const [currFirstPair, setCurrenceFirstPair] = React.useState<string>('USD');
  const [helperText, setHelperText] = React.useState<string>('');
  const [error, setError] = React.useState<boolean>(false);

  // SECOND PAIR
  const [amountSecondPair, setAmountSecondPair] = React.useState<number | string>('');
  const [currSecondPair, setCurrenceSecondPair] = React.useState<string>('USD');

  const handleChange = () => {
    if (!(amountFirstPair === '')) {
      if (currFirstPair !== currSecondPair) {
        const currencesFromApi: string | null = localStorage.getItem('currencesFromApi');
        if (!currencesFromApi) {
          const actualPairA = fetchParams(currFirstPair, currSecondPair);
          const amountFPNumberA = Number(amountFirstPair);
          actualPairA.then((result:any) => {
            if (result !== undefined) {
              const unrounded = amountFPNumberA * parseFloat(result);
              setAmountSecondPair(Math.round((unrounded + Number.EPSILON) * 100) / 100);
              const amountSP = Math.round((unrounded + Number.EPSILON) * 100) / 100;
              dispatch(createTransactionActionCreator({
                account: selectedAcc.id, amountFP: amountFPNumberA, currenceFP: currFirstPair, amountSP, currenceSP: currSecondPair,
              }));
            } else {
              return handleChange();
            }
          });
        } else {
        // currencesFromApi
          const currFromapi = JSON.parse(currencesFromApi);
          if (currFromapi.fetchParams === 'false') { // server unavailable
            const actual3xItem: string | null = localStorage.getItem('actual3x');
            if (!actual3xItem) {
            // R
              fetch3x();
            // loadHistoricalDataToLocalState();
            } else {
            // f3x is in LS
              const actual3xParsed = JSON.parse(actual3xItem);
              const { data, dateTime } = actual3xParsed;

              const difference = new Date().getTime() - new Date(dateTime).getTime();
              const resultInMinutes = Math.round(difference / 60000);
              if (resultInMinutes > 60) {
                fetch3x();
              }
              const actualPair = data.filter((curr:any) => curr.currency === `${currFirstPair}/${currSecondPair}`);
              if (actualPair[0] === undefined) {
                localStorage.removeItem('actual3x');
                loadHistoricalDataToLocalState();
                alert('We havent this rate in our data. Please change currences.');
              }
              if (actualPair[0] !== undefined) {
                const amountFPNumber = Number(amountFirstPair);
                const unrounded = amountFPNumber * parseFloat(actualPair[0].rate);
                console.log('correct from 3xLS');
                setAmountSecondPair(Math.round((unrounded + Number.EPSILON) * 100) / 100);
                const amountSP = Math.round((unrounded + Number.EPSILON) * 100) / 100;
                dispatch(createTransactionActionCreator({
                  account: selectedAcc.id, amountFP: amountFPNumber, currenceFP: currFirstPair, amountSP, currenceSP: currSecondPair,
                }));
              }
            }
          } else { // TRUE from fetchParams
            const actualPair = fetchParams(currFirstPair, currSecondPair);
            const amountFPNumber = Number(amountFirstPair);
            actualPair.then((result:any) => {
              if (result !== undefined) {
                const unrounded = amountFPNumber * parseFloat(result);
                setAmountSecondPair(Math.round((unrounded + Number.EPSILON) * 100) / 100);
                const amountSP = Math.round((unrounded + Number.EPSILON) * 100) / 100;
                dispatch(createTransactionActionCreator({
                  account: selectedAcc.id, amountFP: amountFPNumber, currenceFP: currFirstPair, amountSP, currenceSP: currSecondPair,
                }));
              }
            });
          }
        }
      } else { // usd/usd
        setAmountSecondPair(amountFirstPair);
      }
    }
  };

  const setAmountFP = (e: any) => {
    const target = e.target as HTMLTextAreaElement;
    if (matchExpression(target.value) === false) {
      setHelperText('Only number.');
      setError(true);
      setTimeout(() => {
        setHelperText('');
        setError(false);
      }, 2500);
    } else {
      setHelperText('');
      setError(false);
      setAmountFirstPair(e.target.value);
    }
  };

  // select first pair
  const handleSelectFirstPair = (event: SelectChangeEvent) => {
    setCurrenceFirstPair(event.target.value as string);
  };

  // select second pair
  const handleSelectSecondPair = (event: SelectChangeEvent) => {
    setCurrenceSecondPair(event.target.value as string);
    setAmountSecondPair('');
  };

  const handleCancel = () => {
    setAmountFirstPair('');
    setAmountSecondPair('');
    setHelperText('');
    setError(false);
  };

  return (
    <div style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 3 }}>
      <div style={{ display: 'flex' }}>
        {/* FIRST PAIR ////////////////////////////////////// */}
        <TextField
          style={{ marginRight: '15px' }}
          required
          helperText={helperText}
          error={error}
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
            <InputLabel id="demo-simple-select-label">Currence</InputLabel>
            <Select
              disabled
              style={{ fontWeight: 'bold' }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currFirstPair}
              label="Currence"
              onChange={handleSelectFirstPair}
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
      <div style={{ display: 'flex' }}>
        {/* SECOND PAIR ////////////////////////////////////// */}
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
            <InputLabel id="demo-simple-select-label">Currence</InputLabel>
            <Select
              style={{ fontWeight: 'bold' }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currSecondPair}
              label="Currence"
              onChange={handleSelectSecondPair}
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
      <DialogActions>
        <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
        <Button variant="outlined" color="success" onClick={handleChange}>Change</Button>
      </DialogActions>
    </div>
  );
};

export default ChangeCurrences;
