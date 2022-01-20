import { accountsSlice } from './components/accounts/accountsSlice';
import { transactionsSlice } from './components/transactions/transactionsSlice';

export const rootReducer = {
  accounts: accountsSlice.reducer,
  transactions: transactionsSlice.reducer,
};
