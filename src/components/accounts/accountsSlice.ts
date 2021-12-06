/* eslint-disable max-len */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialStateOfArray as defaultState } from '../../helpers/initialState';

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState: defaultState,
  reducers: {
    create: (state, { payload }: PayloadAction<{ id: string, accNumber: number, accValue: number }>) => {
      state.push(payload);
    },
    remove: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.findIndex((account) => account.id);
      if (index !== -1) { state.splice(index, 1); }
    },
  },
});

export const {
  create: createAccountActionCreator,
  remove: removeAccountActionCreator,
} = accountsSlice.actions;
