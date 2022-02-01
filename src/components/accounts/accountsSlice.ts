/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccount, TCreateAccounts } from '../../types/types';
import { get } from '../../helpers/fetch/get';

export interface IState {
  accounts: Array<IAccount>,
  selectedAccount: IAccount,
  accountValue: number,
  status: string
}

export const initialState: IState = {
  accounts: [],
  status: 'idle',
  selectedAccount: {
    id: 0,
    name: '',
    accountNumber: 0,
    accountValue: 0,
    currency: '',
    createdAt: '',
  },
  accountValue: 0,
};

export const fetchAllAccounts = createAsyncThunk(
  'users/fetchAllAccounts/fulfilled',
  async (target: string) => {
    const data = await get(target);
    return data;
  },
);

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    createAccount: ({ accounts }, { payload }: PayloadAction<TCreateAccounts>) => {
      const accountsFromLS: string | null = localStorage.getItem('accounts');
      if (accountsFromLS) {
        localStorage.setItem('accounts', JSON.stringify([...accounts, payload]));
      } else {
        localStorage.setItem('accounts', JSON.stringify([...initialState.accounts, payload]));
      }
      accounts.push(payload);
    },
    removeAccount: ({ accounts }, { payload }: PayloadAction<string>) => {
      const accountsLocalStorage: string | null = localStorage.getItem('accounts');
      if (accountsLocalStorage) {
        const listOfAccounts = JSON.parse(accountsLocalStorage);
        const index = listOfAccounts.findIndex((account: any) => account.id === payload);
        if (index !== -1) { listOfAccounts.splice(index, 1); }
        localStorage.setItem('accounts', JSON.stringify(listOfAccounts));
      }
      const accountsTransactions: string | null = localStorage.getItem('accountsTransactions');
      if (accountsTransactions) {
        const listOfTransactions = JSON.parse(accountsTransactions);
        const newListTransatcion = listOfTransactions.filter((transaction: any) => transaction.account !== payload);
        localStorage.setItem('accountsTransactions', JSON.stringify(newListTransatcion));
      }
      const index = accounts.findIndex((account) => account.name === payload);
      if (index !== -1) { accounts.splice(index, 1); }
    },
    selectAccount: (state, { payload }: PayloadAction<IAccount>) => {
      localStorage.setItem('selectedAccount', JSON.stringify(payload));
      state.selectedAccount = payload;
    },
    updateAccountValue: (state, { payload }: PayloadAction<number>) => {
      const selectedAccount: string | null = localStorage.getItem('selectedAccount');
      if (selectedAccount) {
        const { accountValue } = JSON.parse(selectedAccount);
        state.accountValue = accountValue;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAccounts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAllAccounts.fulfilled, (state, { payload }: PayloadAction<TFetchAccounts>) => {
        state.status = 'successed';
        console.log(payload);
        const { data } = payload;

        state.accounts.length = 0;
        if (state.accounts.length !== data.length) {
          data.forEach((element: any) => {
            state.accounts.push(element);
          });
        }
      })
      .addCase(fetchAllAccounts.rejected, (state, { payload }) => {
        state.status = 'failed';
      });
  },
});

export const {
  createAccount,
  removeAccount,
  selectAccount,
  updateAccountValue,
} = accountsSlice.actions;
