/* eslint-disable import/prefer-default-export */
import { accountsSlice } from './components/accounts/accountsSlice';
import { selectedAccountSlice } from './components/accounts/selectedAccountSlice';

export const reducer = {
  accounts: accountsSlice.reducer,
  selected: selectedAccountSlice.reducer,
};
