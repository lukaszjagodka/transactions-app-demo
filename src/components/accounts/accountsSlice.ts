/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccount, TFetchAccounts } from '../../types/types';
import { get } from '../../helpers/fetch/get';
import { post } from '../../helpers/fetch/post';
import { deleteAccount } from '../../helpers/fetch/delete';

interface IState {
  accounts: Array<IAccount>,
  selectedAccount: IAccount,
  accountValue: number,
  statusFetchAccounts: String,
  statusFetchRates: String,
  currencyString: String
}

export const initialState: IState = {
  accounts: [],
  statusFetchAccounts: 'idle',
  statusFetchRates: 'idle',
  selectedAccount: {
    id: 0,
    name: '',
    accountNumber: 0,
    accountValue: 0,
    currency: '',
    createdAt: '',
  },
  accountValue: 0,
  currencyString: '',
};

export const fetchRates = createAsyncThunk(
  'accounts/fetchRates',
  async () => {
    try {
      const json = await get('rates');
      const { currencyString } = json.data;
      return currencyString;
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchAccounts = createAsyncThunk(
  'accounts/fetchAccounts',
  async () => {
    const data = await get('accounts');
    return data;
  },
);

export const removeAccount = createAsyncThunk<void, number, {state: IState }>(
  'accounts/removeAccount',
  async (id, { getState }) => {
    const { accounts } = getState();
    deleteAccount(`accounts?id=${id}`);
    const index = accounts.findIndex((account) => account.id === id);
    if (index !== -1) { accounts.splice(index, 1); }
  },
);

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    createAccount: ({ accounts }, { payload }: PayloadAction<Partial<IAccount>>) => {
      post(payload, 'accounts');
    },
    selectAccount: (state, { payload }: PayloadAction<IAccount>) => {
      localStorage.setItem('selectedAccount', JSON.stringify(payload));
      state.selectedAccount = payload;
    },
    updateAccountValue: (state, action) => {
      const selectedAccount: string | null = localStorage.getItem('selectedAccount');
      if (selectedAccount) {
        const { accountValue, id } = JSON.parse(selectedAccount);
        post({ accountValue, id }, 'accounts/updateAccountValue');
        state.accountValue = accountValue;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.pending, (state, action) => {
        state.statusFetchRates = 'loading';
      })
      .addCase(fetchRates.fulfilled, (state, { payload }: PayloadAction<any>) => {
        state.statusFetchRates = 'successed';
        state.currencyString = payload;
      })
      .addCase(fetchRates.rejected, (state, { payload }) => {
        state.statusFetchRates = 'failed';
      })
      .addCase(fetchAccounts.pending, (state, action) => {
        state.statusFetchAccounts = 'loading';
      })
      .addCase(fetchAccounts.fulfilled, (state, { payload }: PayloadAction<TFetchAccounts>) => {
        state.statusFetchAccounts = 'successed';
        if (payload) {
          const { data } = payload;
          state.accounts.length = 0;
          if (state.accounts.length !== data.length) {
            data.forEach((element: any) => {
              state.accounts.push(element);
            });
          }
        }
      })
      .addCase(fetchAccounts.rejected, (state, { payload }) => {
        state.statusFetchAccounts = 'failed';
      });
  },
});

export const {
  createAccount,
  selectAccount,
  updateAccountValue,
} = accountsSlice.actions;
