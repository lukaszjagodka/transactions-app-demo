/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface selectedState {
  id: string,
  accNumber: number,
  accValue: number,
}

const initialState = { } as selectedState;

export const selectedAccountSlice = createSlice({
  name: 'selectedAccount',
  initialState,
  reducers: {
    select: (state, { payload }: PayloadAction<{ id: string, accNumber: number, accValue: number }>) => payload,
  },
});

export const {
  select: selectAccountActionCreator,
} = selectedAccountSlice.actions;
