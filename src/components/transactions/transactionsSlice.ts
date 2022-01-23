import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateAccountNumber } from '../../helpers/generateAccountDate';
import { TTransaction } from '../../types/types';

export interface ITransactionsState {
  transactions: Array<TTransaction>
}

export const initialState: ITransactionsState = {
  transactions: [
    {
      account: 'Demo-account-m8fpdawbi',
      id: 849583779889844,
      date: '12/13/2021, 22:29:12',
      amountFirstPair: 333,
      currencyFirstPair: 'USD',
      amountSecondPair: 1363.97,
      currencySecondPair: 'PLN',
    },
    {
      account: 'Demo-account-m8fpdawbi',
      id: 874543213456123,
      date: '12/12/2021, 22:25:12',
      amountFirstPair: 222,
      currencyFirstPair: 'USD',
      amountSecondPair: 196.65,
      currencySecondPair: 'EUR',
    },
    {
      account: 'Demo-account-pzc38tfeo',
      id: 874543213456666,
      date: '12/12/2021, 22:26:12',
      amountFirstPair: 789,
      currencyFirstPair: 'USD',
      amountSecondPair: 196.65,
      currencySecondPair: 'EUR',
    },
  ],
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    createTransaction: {
      reducer: (state, { payload }: PayloadAction<TTransaction>) => {
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
        account, amountFirstPair, currencyFirstPair, amountSecondPair, currencySecondPair,
      }: {account: string, amountFirstPair: number, currencyFirstPair: string, amountSecondPair: number, currencySecondPair: string}) => ({
        payload: {
          account,
          id: generateAccountNumber(),
          date: new Date().toLocaleString(undefined, {
            year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit', timeZone: 'Europe/Warsaw',
          }),
          amountFirstPair,
          currencyFirstPair,
          amountSecondPair,
          currencySecondPair,
        },
      }),
    },
  },
});

export const {
  createTransaction,
} = transactionsSlice.actions;
