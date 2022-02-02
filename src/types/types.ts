export interface IAccount {
  id: number
  name: string,
  accountNumber: number,
  accountValue: number,
  currency: string,
  createdAt: string
}

export type TFetchAccounts = {
  success: string,
  data: Array<IAccount>
}

export interface IAccountsState {
  accounts: {
    accounts: Array<IAccount>,
    selectedAccount: IAccount,
    statusFetchAccounts: String,
    statusFetchRates: String,
    currencyString: Array<TPair>
  }
}

export type TTransaction = {
  name: string,
  id: number,
  date: string,
  amountFirstPair: number,
  currencyFirstPair: string,
  rate: number,
  amountSecondPair: number,
  currencySecondPair: string,
}

export interface ITransactionsState {
  transactions: {
    transactions: Array<TTransaction>,
  }
}

export type TPair = {
  pair: string,
  value: string
}
