/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateAccountNumber } from '../../helpers/generateAccountDate';
import { TTransaction } from '../../types/types';
import { post } from '../../helpers/fetch/post';
import { get } from '../../helpers/fetch/get';

export interface ITransactionsState {
  transactions: Array<TTransaction>
  fetchAccounts: string
}

export const initialState: ITransactionsState = {
  transactions: [],
  fetchAccounts: 'idle',
};

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (id: number) => {
    const data = await get(`transactions?key=${id}`);
    return data;
  },
);

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    createTransaction: {
      reducer: (state, { payload }: PayloadAction<TTransaction>) => {
        post(payload, 'transactions');
        state.transactions.push(payload);
      },
      prepare: ({
        accountId,
        name,
        amountFirstPair,
        currencyFirstPair,
        rate,
        amountSecondPair,
        currencySecondPair,
      }: {
        accountId: number,
        name: string,
        amountFirstPair: number,
        currencyFirstPair: string,
        rate: number,
        amountSecondPair: number,
        currencySecondPair: string
      }) => ({
        payload: {
          accountId,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state, action) => {
        state.fetchAccounts = 'loading';
      })
      .addCase(fetchTransactions.fulfilled, (state, { payload }: PayloadAction<any>) => {
        state.fetchAccounts = 'successed';
        if (payload) {
          const { response } = payload;
          state.transactions.length = 0;
          if (state.transactions.length !== response.length) {
            response.forEach((element: any) => {
              state.transactions.push(element);
            });
          }
        }
      })
      .addCase(fetchTransactions.rejected, (state, { payload }) => {
        state.fetchAccounts = 'failed';
      });
  },
});

export const {
  createTransaction,
} = transactionsSlice.actions;
