/* eslint-disable prefer-const */
/* eslint-disable max-len */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateAccountNumber } from '../helpers/generateAccountDate';
import { TTransaction } from '../types.d';

export interface ITransactionsState {
  transactions: Array<TTransaction>
}

export const initialState: ITransactionsState = {
  transactions: [
    {
      account: 'Demo-account-m8fpdawbi',
      id: 849583779889844,
      date: '12/13/2021, 22:29:12',
      amountFP: 333,
      currenceFP: 'USD',
      amountSP: 1363.97,
      currenceSP: 'PLN',
    },
    {
      account: 'Demo-account-m8fpdawbi',
      id: 874543213456123,
      date: '12/12/2021, 22:25:12',
      amountFP: 222,
      currenceFP: 'USD',
      amountSP: 196.65,
      currenceSP: 'EUR',
    },
    {
      account: 'Demo-account-pzc38tfeo',
      id: 874543213456666,
      date: '12/12/2021, 22:26:12',
      amountFP: 789,
      currenceFP: 'USD',
      amountSP: 196.65,
      currenceSP: 'EUR',
    },
  ],
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<{ account: string, id: number, date: string, amountFP: number, currenceFP: string, amountSP: number, currenceSP: string }>) => {
        const transactionsLS: string | null = localStorage.getItem('accountsTransactions');
        if (!transactionsLS) {
          localStorage.setItem('accountsTransactions', JSON.stringify([...initialState.transactions, payload]));
        } else {
          const retrivedTransactionsLS: string | null = localStorage.getItem('accountsTransactions');
          if (retrivedTransactionsLS) {
            const oldArray = JSON.parse(retrivedTransactionsLS);
            localStorage.setItem('accountsTransactions', JSON.stringify([...oldArray, payload]));
          }
        }
        state.transactions.push(payload);
      },
      prepare: ({
        account, amountFP, currenceFP, amountSP, currenceSP,
      }: {account: string, amountFP: number, currenceFP: string, amountSP: number, currenceSP: string}) => ({
        payload: {
          account,
          id: generateAccountNumber(),
          date: new Date().toLocaleString(undefined, {
            year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit', timeZone: 'Europe/Warsaw',
          }),
          amountFP,
          currenceFP,
          amountSP,
          currenceSP,
        },
      }),
    },
  },
});

export const {
  create: createTransactionActionCreator,
} = transactionsSlice.actions;
