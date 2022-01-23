/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccount, TCreateAccounts } from '../../types/types';

export interface IState {
  accounts: Array<IAccount>,
  selectedAccount: IAccount
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
};

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    createAccount: (state, { payload }: PayloadAction<TCreateAccounts>) => {
      const accLS: string | null = localStorage.getItem('accounts');
      if (accLS === null) {
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
    removeAccount: ({ accounts }, { payload }: PayloadAction<{ id: string }>) => {
      const index = accounts.findIndex((account) => account.id);
      if (index !== -1) { accounts.splice(index, 1); }
    },
    selectAccount: (state, { payload }: PayloadAction<IAccount>) => {
      localStorage.setItem('selectedAccount', JSON.stringify(payload));
      state.selectedAccount = payload;
    },
  },
});

export const {
  createAccount,
  removeAccount,
  selectAccount,
} = accountsSlice.actions;
