/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable max-len */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccount } from '../../types.d';

export interface IState {
  accounts: Array<IAccount>,
  selectedAccount: IAccount
}

export const newIni: IState = {
  accounts: [
    { id: 'Demo-account-pzc38tfeo', accNumber: 603975430160344, accValue: 15000 },
    { id: 'Demo-account-m8fpdawbi', accNumber: 152573100742264, accValue: 23000 },
  ],
  selectedAccount: {
    id: '',
    accNumber: 0,
    accValue: 0,
  },
};

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState: newIni,
  reducers: {
    create: (state, { payload }: PayloadAction<{ id: string, accNumber: number, accValue: number }>) => {
      state.accounts.push(payload);
    },
    remove: ({ accounts }, { payload }: PayloadAction<{ id: string }>) => {
      const index = accounts.findIndex((account) => account.id);
      if (index !== -1) { accounts.splice(index, 1); }
    },
    select: (state, { payload }: PayloadAction<IAccount>) => {
      localStorage.setItem('selectedAccount', JSON.stringify(payload));
      state.selectedAccount = payload;
    },
  },
});

export const {
  create: createAccountActionCreator,
  remove: removeAccountActionCreator,
  select: selectAccountActionCreator,
} = accountsSlice.actions;
