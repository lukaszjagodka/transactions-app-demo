import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const selectedAccountSlice = createSlice({
  name: 'selectedAccount',
  initialState: null as string | null,
  reducers: {
    select: (state, { payload }: PayloadAction<{ id: string}>) => payload.id,
  },
});

export const {
  select: selectAccountActionCreator,
} = selectedAccountSlice.actions;
