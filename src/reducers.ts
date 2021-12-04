/* eslint-disable import/prefer-default-export */
import { accountsSlice } from './components/accounts/accountsSlice';

export const reducer = {
  accounts: accountsSlice.reducer,
};
