export interface IAccount {
  id: string,
  accountNumber: number,
  accountValue: number,
  currency: string
}

export interface IAccountsState {
  accounts: {
    accounts: Array<IAccount>,
    selectedAccount: IAccount
  }
}

export type TTransaction = {
  account: string,
  id: number,
  date: string,
  amountFirstPair: number,
  currencyFirstPair: string,
  amountSecondPair: number,
  currencySecondPair: string,
}

export interface ITransactionsState {
  transactions: {
    transactions: Array<TTransaction>,
  }
}

export type TCreateAccounts = {
  id: string,
  accountNumber: number,
  accountValue: number,
  currency: string,
}

export type TPair = {
  pair: string,
  value: string
}
