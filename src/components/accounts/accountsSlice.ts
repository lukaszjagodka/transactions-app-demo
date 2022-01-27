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
    createAccount: (state, { payload }: PayloadAction<TCreateAccounts>) => {
      const accLS: string | null = localStorage.getItem('accounts');
      if (accLS) {
        localStorage.setItem('accounts', JSON.stringify([...initialState.accounts, payload]));
      } else {
        const retrievedAccObject: string | null = localStorage.getItem('accounts');
        if (retrievedAccObject) {
          const oldArray = JSON.parse(retrievedAccObject);
          localStorage.setItem('accounts', JSON.stringify([...oldArray, payload]));
        }
      }
      state.accounts.push(payload);
    },
    removeAccount: ({ accounts }, { payload }: PayloadAction<string>) => {
      const accountsLocalStorage: string | null = localStorage.getItem('accounts');
      if (accountsLocalStorage) {
        const listOfAccounts = JSON.parse(accountsLocalStorage);
        const index = listOfAccounts.findIndex((account: any) => account.id === payload);
        if (index !== -1) { listOfAccounts.splice(index, 1); }
        localStorage.setItem('accounts', JSON.stringify(listOfAccounts));
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
