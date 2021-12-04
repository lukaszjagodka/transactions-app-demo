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
  },
});

export const {
  create: createAccountActionCreator,
} = accountsSlice.actions;
