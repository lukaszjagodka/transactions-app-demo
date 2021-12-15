export interface IAccount {
  id: string,
  accNumber: number,
  accValue: number,
  curr: string
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
  amountFP: number,
  currenceFP: string,
  amountSP: number,
  currenceSP: string,
}

export interface ITransactionsState {
  transactions: {
    transactions: Array<TTransaction>,
  }
}
