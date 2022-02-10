/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccount, TFetchAccounts } from '../../types/types';
import { get } from '../../helpers/fetch/get';
import { post } from '../../helpers/fetch/post';
import { put } from '../../helpers/fetch/put';
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

export const removeAccount = createAsyncThunk<void, number, {}>(
  'accounts/removeAccount',
  async (id) => {
    try {
      await deleteAccount(`accounts?id=${id}`);
    } catch (error) {
      console.log(error);
    }
  },
);

export const createAccount = createAsyncThunk<void, Partial<IAccount>, {}>(
  'accounts/createAccount',
  async (payload) => {
    await post(payload, 'accounts');
  },
);

export const updateAccountValue = createAsyncThunk< any, { actualBalance: number, accountId: number }, {}>(
  'accounts/updateAccountValue',
  async (object, thunkAPI) => {
    try {
      const { actualBalance, accountId } = object;
      await put({ actualBalance }, `accounts?id=${accountId}`);
      thunkAPI.dispatch(updateValue(actualBalance));
    } catch (error) {
      console.log(error);
    }
  },
);

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    selectAccount: (state, { payload }: PayloadAction<IAccount>) => {
      localStorage.setItem('selectedAccount', JSON.stringify(payload));
      state.selectedAccount = payload;
    },
    updateValue: (state, { payload }: PayloadAction<number>) => {
      state.accountValue = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeAccount.fulfilled, ({ accounts }, action) => {
        const index = accounts.findIndex((account) => account.id === action.meta.arg);
        if (index !== -1) { accounts.splice(index, 1); }
      })
      .addCase(createAccount.fulfilled, (state, action) => {
      })
      .addCase(fetchRates.pending, (state, action) => {
        state.statusFetchRates = 'loading';
      })
      .addCase(fetchRates.fulfilled, (state, { payload }: PayloadAction<string>) => {
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
  selectAccount,
  updateValue,
} = accountsSlice.actions;
