/* eslint-disable import/prefer-default-export */
import { accountsSlice } from './components/accounts/accountsSlice';
import { transactionsSlice } from './components/transactionsSlice';

export const reducer = {
  accounts: accountsSlice.reducer,
  transactions: transactionsSlice.reducer,
};
