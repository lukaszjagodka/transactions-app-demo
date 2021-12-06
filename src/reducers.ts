/* eslint-disable import/prefer-default-export */
import { accountsSlice } from './components/accounts/accountsSlice';
import { selectedAccountSlice } from './components/accounts/selectedAccountSlice';

export const reducer = {
  selected: selectedAccountSlice.reducer,
  accounts: accountsSlice.reducer,
};
