/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccount, TCreateAccounts } from '../../types/types';

export interface IState {
  accounts: Array<IAccount>,
  selectedAccount: IAccount,
  accountValue: number
}

export const initialState: IState = {
  accounts: [
    {
      id: 'Demo-account-pzc38tfeo', accountNumber: 603975430160344, accountValue: 15000, currency: 'PLN',
    },
    {
      id: 'Demo-account-m8fpdawbi', accountNumber: 152573100742264, accountValue: 6000, currency: 'USD',
    },
  ],
  selectedAccount: {
    id: '',
    accountNumber: 0,
    accountValue: 0,
    currency: '',
  },
  accountValue: 0,
};

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
      const index = accounts.findIndex((account) => account.id === payload);
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
});

export const {
  createAccount,
  removeAccount,
  selectAccount,
  updateAccountValue,
} = accountsSlice.actions;
