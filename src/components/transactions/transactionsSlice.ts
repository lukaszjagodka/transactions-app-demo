import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateAccountNumber } from '../../helpers/generateAccountDate';
import { TTransaction } from '../../types/types';

export interface ITransactionsState {
  transactions: Array<TTransaction>
}

export const initialState: ITransactionsState = {
  transactions: [],
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
        name, amountFirstPair, currencyFirstPair, rate, amountSecondPair, currencySecondPair,
      }: {name: string, amountFirstPair: number, currencyFirstPair: string, rate: number, amountSecondPair: number, currencySecondPair: string}) => ({
        payload: {
          name,
          id: generateAccountNumber(),
          date: new Date().toLocaleString(undefined, {
            year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit', timeZone: 'Europe/Warsaw',
          }),
          amountFirstPair,
          currencyFirstPair,
          rate,
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
